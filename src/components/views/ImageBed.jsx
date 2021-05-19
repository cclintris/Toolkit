import React from "react";
import "../style/ImageBed.css";
import Uploader from "../views/Uploader";

const ImageBed = () => {
  return (
    <div>
      <div className="uploader">
        <Uploader />
      </div>
      <div className="links"></div>
    </div>
  );
};

export default ImageBed;
