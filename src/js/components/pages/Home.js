import React from "react";
import {Link} from 'react-router-dom';
import '../../../sass/components/pages/home.sass'
import Canvas from "./Canvas"
export default class Home extends React.Component {

  render() {
    return (
      <div>
        <div class="home-wrap">
          <Canvas
          width={500}
          height={300}
          animationSpeed={300}></Canvas>
        </div>
      </div>
    );
  }
}
