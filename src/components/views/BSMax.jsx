import React from "react";
import BSMax from "../../assets/BSMax.png";
import BSbibi from '../../assets/BSbibi.jpeg';

export default class MouseTracker extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img
        src={BSbibi}
        alt=""
        style={{
          position: "absolute",
          left: mouse.x,
          top: mouse.y,
          width: "80px",
          height: "100px",
        }}
      />
    );
  }
}
