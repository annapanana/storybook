import React from "react";
import ReactDOM from 'react-dom';
import {positionData, loadingData} from "../../data/melinda_data.js";

export default class Canvas extends React.Component {
  constructor() {
    super();
    this.stage = {};
    this.width = "1024";
    this.height = "768";
    this.positionData = positionData;
    this.handleFileComplete = this.handleFileComplete.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);
    this.clickEvent = this.clickEvent.bind(this);
  }

  componentDidMount() {
    var canvas = ReactDOM.findDOMNode(this.refs.canvas);
    this.stage = new createjs.Stage(canvas);
    createjs.Ticker.addEventListener('tick', this.stage);
    createjs.Ticker.setFPS(60);
    // this.stage.enableMouseOver(10);

    var queue = new createjs.LoadQueue(true);
    queue.on("fileload", this.handleFileComplete.bind(this));
    queue.on("complete", this.renderCanvas.bind(this));
    for (var i = 0; i < loadingData.length; i++) {
      queue.loadFile(loadingData[i]);
    }
    queue.load();
  }

  handleFileComplete(e) {
    let img = new createjs.Bitmap(e.item.src);
    this.setImage(img, e.item.id);
  }

  setImage(img, id) {
    let data = this.positionData.find((p) => {
      return p.id === id;
    })

    img.addEventListener("mousedown", this.clickEvent.bind(this, img, data));

    if (data.children.length > 0) {
      this.setImageGroup(img, data);
      return;
    }

    img = this.setInitPositionData(img, id)
    this.renderCanvas();
    // push loaded image to data set
    data.img = img;
    img.alpha = data.a;
    this.setSteps(img, data, 0);

    // Add starting assets to the stage
    this.stage.addChild(img);
  }

  // if there are children, create a group
  setImageGroup(img, data) {
    var container = new createjs.Container();
    container.addChild(img);
    var queue = new createjs.LoadQueue(true);
    queue.on("complete", this.positionGroup.bind(this, container, data));
    for (var i = 0; i < data.children.length; i++) {
      queue.on("fileload", this.handleChildLoad.bind(this, container, data.children[i], data));
      queue.loadFile({
        id:data.children[i].id,
        src:data.children[i].img["src"]
      });
    }
  }

  handleChildLoad(container, subData, data, e){
    let img = new createjs.Bitmap(e.item.src);
    img.addEventListener("mousedown", this.clickEvent.bind(this, img, subData));
    img.x = subData.x;
    img.y = subData.y;
    img.scaleX = subData.scaleX;
    img.scaleY = subData.scaleY;
    img.alpha = subData.a;
    this.setClickableData(data, img, subData.id);
    container.addChild(img);
  }

  setClickableData(data, img, id) {
    for (var i = 0; i < data.clickable.length; i++) {
      if (id === data.clickable[i].childImg.id) {
        data.clickable[i].childImg.src = img;
      }
    }
  }

  positionGroup(container, data, e) {
    container.x = data.x;
    container.y = data.y;
    container.alpha = data.a;
    this.setSteps(container, data, 0);
    this.stage.addChild(container);
  }

  renderCanvas() {
    this.stage.update();
  }

  setSteps(obj, data, i, startingX, startingY) {
    this.recenter(obj, data);
    if (i === data.steps.length) {
      return;
    }

    if ( i === 0 ) {
      startingX = obj.x;
      startingY = obj.y;
    }
    let xSum = parseInt(startingX) + parseInt(data.steps[i].x);
    let ySum = parseInt(startingY) + parseInt(data.steps[i].y);
    createjs.Tween.get(obj)
      .wait(data.steps[i].wait)
      .to({
        x: xSum,
        y: ySum,
        scaleX: data.steps[i].sx,
        scaleY: data.steps[i].sy,
        rotation: data.steps[i].rot,
        alpha: data.steps[i].a
      }, data.steps[i].t, createjs.Ease.getPowInOut(data.steps[i].easePow))
      .call(this.setSteps.bind(this, obj, data, i+1, xSum, ySum));
  }

  setInitPositionData(img, id) {
    let data = this.positionData.find((p) => {
      return p.id === id;
    })
    img.x = data.x;
    img.y = data.y
    img.scaleX = data.scaleX;
    img.scaleY = data.scaleY;
    this.recenter(img, data);
    return img;
  }

  recenter(obj, data) {
  	var bds = obj.getBounds();
    if (bds === null) return;
    obj.regX = data.anchorX === 0 ? 0: bds.width/data.anchorX;
    obj.regY = data.anchorY === 0 ? 0: bds.height/data.anchorY;
  }

  clickEvent(img, data, e) {
    // TODO this is currently hardcoded to only use first clickable animation
    this.setSteps(data.clickable[0].childImg.src, data.clickable[0], 0);
  }

  render() {
    return (
      <canvas ref="canvas" width={this.width} height={this.height}></canvas>
    )
  }
}
