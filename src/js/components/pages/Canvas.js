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
        children: [],
        scaleX: .5,
        scaleY: .5,
        x:0,
        y:0,
        rot: 0,
        img: {},
        a: 1,
        steps: []
      },
      {
        id:"melinda_full",
        children: [
          {
            id: "melinda_eye",
            img: {src:"/assets/melinda_eye_closed.png"},
            scaleX: .5,
            scaleY: .5,
            x: 255,
            y: 200,
            a: 0,
            steps: []
          }
        ],
        scaleX: .75,
        scaleY: .75,
        anchorX: 0,
        anchorY: 0,
        x:this.width - 600,
        y:this.height,
        rot: 0,
        a: 1,
        img: {},
        steps: [
          {
            wait: 1000,
            x: 0,
            y: 0,
            t: 0,
            sx: .75,
            sy: .75,
            easePow: 0,
            rot: 0
          },
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
            wait: 3000,
            x: 0,
            y: 250,
            t: 1000,
            sx: .75,
            sy: .75,
            easePow: 1,
            rot: 0
          },
          {
            wait: 0,
            x: -100,
            y: 0,
            t: 0,
            sx: .75,
            sy: .75,
            easePow: 1,
            rot: 0
          },
          {
            wait: 1000,
            x: 0,
            y: -800,
            t: 1000,
            sx: .75,
            sy: .75,
            easePow: 1,
            rot: 0
          },
          {
            wait: 1000,
            x: -150,
            y: 0,
            t: 1000,
            sx: .75,
            sy: .75,
            easePow: 1,
            rot: 0
          }
        ],
        clickable: [
          {
            childImg: {
              id: "melinda_eye",
              src: ""
            },
            steps: [
              {
                wait: 0,
                x: 0,
                y: 0,
                t: 200,
                sx: .5,
                sy: .5,
                easePow: 1,
                rot: 0,
                a: 1
              },
              {
                wait: 500,
                x: 0,
                y: 0,
                t: 200,
                sx: .5,
                sy: .5,
                easePow: 1,
                rot: 0,
                a: 0
              }
            ]
          }
        ]
      },
      {
        id:"melinda_hand",
        children: [],
        scaleX: .25,
        scaleY: .25,
        anchorX: 2,
        anchorY: 1.5,
        x:this.width - 275,
        y:this.height,
        img: {},
        a: 1,
        steps: [
          {
            wait: 3000,
            x: 0,
            y: 0,
            t: 0,
            sx: .25,
            sy: .25,
            easePow: 0,
            rot: 0
          },
          {
            wait: 100,
            x: 0,
            y: 0,
            t: 500,
            sx: .25,
            sy: .25,
            easePow: 3,
            rot: -25
          },
          {
            wait: 300,
            x: 0,
            y: 0,
            t: 500,
            sx: .25,
            sy: .25,
            easePow: 3,
            rot: 25
          },
          {
            wait: 300,
            x: 50,
            y: 150,
            t: 1000,
            sx: .25,
            sy: .25,
            easePow: 3,
            rot: 0
          },
        ]
      }
    ]

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
    queue.loadFile({id:"background", src:"/assets/background-kitchen-ipadhd.png"});
    queue.loadFile({id:"melinda_full", src:"/assets/melinda-c1p1-ipadhd.png"});
    queue.loadFile({id:"melinda_hand", src:"/assets/melinda_hand.png"});
    // queue.loadFile({id:"melinda_eye", src:"/assets/melinda_eye_closed.png"});
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
    console.log("CLICK");
    console.log(data);
    // TODO this is currently hardcoded to only use first clickable animation
    this.setSteps(data.clickable[0].childImg.src, data.clickable[0], 0);
  }

  render() {
    return (
      <canvas ref="canvas" width={this.width} height={this.height}></canvas>
    )
  }
}
