import React, { useState } from "react";
import "../style/ChineseTrans.css";
import { Input, Button } from "antd";
import { traditionalized, simplized } from "../../utils/chineseTrans";

const { TextArea } = Input;

const ChineseTrans = () => {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <TextArea
        value={input}
        onChange={onChange}
        placeholder="輸入文字"
        style={{ marginBottom: "30px", overflow: "scroll", height: "55vh" }}
      />
      <div className="CT-btn">
        <Button
          type="primary"
          style={{ marginRight: "20px" }}
          onClick={() => {
            setInput(traditionalized(input));
          }}
        >
          簡轉繁
        </Button>
        <Button
          type="primary"
          style={{ marginRight: "20px" }}
          onClick={() => {
            setInput(simplized(input));
          }}
        >
          繁轉簡
        </Button>
        <Button type="dashed">複製的剪貼板</Button>
      </div>
    </div>
  );
};

export default ChineseTrans;
