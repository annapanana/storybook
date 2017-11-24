import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass'
import Canvas from "./Canvas"
import Snow from "../shared/Snow";
import ReactDOM from 'react-dom';
import "../../../sass/components/pages/home.sass"

import * as pageData_01 from "../../data/stonesoup_data_pg01.js";
import * as pageData_02 from "../../data/stonesoup_data_pg02.js";

export default class Home extends React.Component {
  constructor() {
    super();
    this.width = "1024";
    this.height = "768";

    this.state = {
      stage:null,
      curPage:1,
      pageData: pageData_02
    }
  }

  componentDidMount() {
    let canvas = ReactDOM.findDOMNode(this.refs.canvas);
    let stage = new createjs.Stage(canvas);
    this.setState({stage: stage})
  }

  getPageData(page) {
    switch(page) {
      case 1:
        return pageData_01;
      case 2:
        return pageData_02;
    }
  }

  updatePage(i) {
    this.state.stage.removeAllChildren();
    this.state.stage.update();
    this.setState({
      pageData: this.getPageData(this.state.curPage+i),
      curPage: this.state.curPage+i
    })
  }
// <Snow stage={stage}/>
  render() {
    const {stage, curPage, pageData} = this.state;
    return (
      <div class="home-wrap">
        <div class="button" onClick={this.updatePage.bind(this, -1)}>Back</div>
        <Canvas
          stage={stage}
          positionData={pageData.positionData}
          loadingData={pageData.loadingData}/>

        <canvas ref="canvas" width={this.width} height={this.height}></canvas>
        <div class="button" onClick={this.updatePage.bind(this, 1)}>Next</div>
      </div>
    );
  }
}
