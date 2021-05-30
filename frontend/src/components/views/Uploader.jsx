import React, { useState } from "react";
import "../style/Uploader.css";
import { Upload, Image, Button } from "antd";
import { FundOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

const Uploader = () => {
  const [previewSource, setPreviewSource] = useState("");

  const handleFileInputChange = (info) => {
    const reader = new FileReader();
    const file = info.file.originFileObj;
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      }).then((res) => console.log(res));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="box">
      <Dragger
        name="file"
        multiple={false}
        onChange={handleFileInputChange}
        style={{
          width: "100%",
          marginBottom: "10px",
        }}
      >
        <p className="ant-upload-drag-icon">
          <FundOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to preview
        </p>
        <p className="ant-upload-hint">
          Support for a single image preview in <br /> png / jpeg / jpg / gif
        </p>
      </Dragger>
      <div className="central">
        <Image.PreviewGroup>
          {previewSource && (
            <Image
              style={{ marginTop: "20px", marginBottom: "20px" }}
              src={previewSource}
              width={`35vw`}
            />
          )}
        </Image.PreviewGroup>
      </div>
      <div className="central">
        <Button
          style={{ marginRight: "10px" }}
          type="dashed"
          onClick={handleSubmitFile}
        >
          Upload
        </Button>
        <Button onClick={() => setPreviewSource("")} type="dashed" danger>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Uploader;
