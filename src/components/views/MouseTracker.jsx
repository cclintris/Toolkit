import React from "react";
import "../style/MouseTracker.css";
import Mouse from "./Mouse";
import BS from "./BS";

export default class MouseTracker extends React.Component {
  render() {
    return (
      <div style={{ height: "100vh" }}>
        <Mouse render={(mouse) => <BS mouse={mouse} />} />
      </div>
    );
  }
}
