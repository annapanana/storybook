import React from "react";
import ReactDOM from 'react-dom';

export default class Snow extends React.Component {
  constructor() {
    super();
    this.width = "1024";
    this.height = "768";
    this.vx = Math.random() * -2 + 1;
    this.animSnow = this.animSnow.bind(this);
    this.addSnow = this.addSnow.bind(this);
    this.createParticles = this.createParticles.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stage) {
      this.stage = nextProps.stage;
      createjs.Ticker.addEventListener('tick', this.stage);
      createjs.Ticker.setFPS(45);
      for (var i = 0; i < 350; i++) {
        this.createParticles();
      }
    }
  }

  createParticles() {
    var snow = this.addSnow();
    this.stage.addChild(snow);
    this.stage.update();
    snow.addEventListener("tick", this.animSnow.bind(this));
  }

  addSnow() {
    var circle = new createjs.Shape();
    circle.graphics.beginFill("#fff").drawCircle(0, 0, 10);
    circle.x = Math.random() * this.width;
    circle.y = Math.random() * this.height;
    circle.scaleX = circle.scaleY = Math.random() * .8 - .5;
    circle.vy = Math.random() * 1 + 2;
    return circle;
  }

  animSnow(event) {
    this.stage.setChildIndex(event.target, this.stage.getNumChildren()-1);
    event.target.y += event.target.vy;
    event.target.x += this.vx;
    if (event.target.y > this.height || event.target.x > this.width || event.target.x < -30) {
        event.target.y = -20;
        event.target.x = Math.random() * this.width;
    }
  }



  render() {
    return (
      <div></div>
    )
  }
}
