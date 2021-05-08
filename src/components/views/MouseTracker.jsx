import React from "react";
import "../style/MouseTracker.css";
import Mouse from "./Mouse";
import BSMax from "./BSMax";

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Mouse render={(mouse) => <BSMax mouse={mouse} />} />
      </div>
    );
  }
}
