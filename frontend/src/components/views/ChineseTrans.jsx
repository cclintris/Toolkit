import React, { useMemo, useRef, useState } from "react";
import "../style/ChineseTrans.css";
import { Input, Button, message } from "antd";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { traditionalized, simplized } from "../../utils/chineseTrans";

const { TextArea } = Input;

const ChineseTrans = () => {
  const [input, setInput] = useState("");
  const inputRef = useRef();
  const checkTextExist = useMemo(() => {
    return input === null || input === undefined || input === "";
  }, [input]);

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const copyToClipboard = () => {
    if (checkTextExist) {
      message.error("先輸入文字！");
      inputRef.current.focus();
    } else {
      try {
        message.success("複製成功！");
      } catch (e) {
        console.log(e)
        message.error("錯誤發生！");
      }
    }
  };

  return (
    <div>
      <TextArea
        value={input}
        onChange={onChange}
        placeholder="輸入文字"
        style={{ marginBottom: "30px", overflow: "scroll", height: "55vh" }}
        ref={inputRef}
      />
      <div className="CT-btn">
        <Button
          type="primary"
          style={{ marginRight: "20px" }}
          onClick={() => {
            if (!checkTextExist) {
              setInput(traditionalized(input));
              message.info("簡轉繁");
            } else {
              message.error("先輸入文字！");
            }
          }}
        >
          簡轉繁
        </Button>
        <Button
          type="primary"
          style={{ marginRight: "20px" }}
          onClick={() => {
            if (!checkTextExist) {
              setInput(simplized(input));
              message.info("繁轉簡");
            } else {
              message.error("先輸入文字！");
            }
          }}
        >
          繁轉簡
        </Button>
        <CopyToClipboard text={input}>
          <Button
            type="dashed"
            style={{ marginRight: "20px" }}
            onClick={copyToClipboard}
          >
            複製到剪貼板
          </Button>
        </CopyToClipboard>
        <Button
          danger
          type="dashed"
          onClick={() => {
            if (!checkTextExist) {
              setInput("");
            } else {
              message.error("先輸入文字！");
            }
          }}
        >
          清空文字
        </Button>
      </div>
    </div>
  );
};

export default ChineseTrans;
