import React from "react";
import ReactDOM from 'react-dom';

export default class Canvas extends React.Component {
  constructor() {
    super();
    this.stage = {};
    this.width = "1024";
    this.height = "768";
    this.positionData = [
      {
        id:"background",
        scaleX: .5,
        scaleY: .5,
        x:0,
        y:0,
        rot: 0,
        img: {},
        steps: []
      },
      {
        id:"melinda_full",
        scaleX: .75,
        scaleY: .75,
        x:this.width / 1.5,
        y:this.height - 50,
        rot: 0,
        img: {},
        steps: [
          {
            wait: 500,
            x: -50,
            y: -250,
            t: 1000,
            sx: .75,
            sy: .75,
            easePow: 3,
            rot: 0
          },
          {
            wait: 5000,
            x: 0,
            y: 250,
            t: 1000,
            sx: .75,
            sy: .75,
            easePow: 1,
            rot: 0
          }
        ]
      },
      {
        id:"melinda_hand",
        scaleX: .35,
        scaleY: .35,
        x:(this.width / 1.5) - 100,
        y:this.height,
        img: {},
        steps: [
          {
            wait: 1000,
            x: -50,
            y: -100,
            t: 1000,
            sx: .35,
            sy: .35,
            easePow: 3,
            rot: 0
          },
          {
            wait: 1000,
            x: 0,
            y: 0,
            t: 1000,
            sx: .35,
            sy: .35,
            easePow: 3,
            rot: -35
          }
        ]
      },
    ]

    this.handleFileComplete = this.handleFileComplete.bind(this);
    this.renderCanvas = this.renderCanvas.bind(this);
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
    queue.loadFile({id:"background", src:"/assets/background-kitchen-ipadhd.png"});
    queue.loadFile({id:"melinda_full", src:"/assets/melinda-c1p1-ipadhd.png"});
    queue.loadFile({id:"melinda_hand", src:"/assets/melinda_hand.png"});
    queue.load();
  }

  handleFileComplete(e) {
    let img = new createjs.Bitmap(e.item.src);
    img = this.setInitPositionData(img, e.item.id)
    this.setImage(img, e.item.id);
  }

  setImage(img, id) {
    let data = this.positionData.find((p) => {
      return p.id === id;
    })
    this.renderCanvas();
    // push loaded image to data set
    data.img = img;
    this.setSteps(img, data, 0);
    // Add starting assets to the stage
    this.stage.addChild(img);

  }

  renderCanvas() {
    this.stage.update();
  }

  setSteps(obj, data, i, startingX, startingY) {
    this.recenter(obj);
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
        rotation: data.steps[i].rot
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
    this.recenter(img);
    return img;
  }

  recenter(obj) {
  	var bds = obj.getBounds();
    if (bds === null) return;
  	obj.regX = bds.width/2;
  	obj.regY = bds.height/2;
    console.log(obj.regX, obj.regY);
  }

  render() {
    return (
      <canvas ref="canvas" width={this.width} height={this.height}></canvas>
    )
  }
}
