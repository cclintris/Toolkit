import React from "react";
import "../style/ChineseTrans.css";
import { Input } from "antd";

const { TextArea } = Input;

export default class ChineseTrans extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
  }

  onChange = ({ target: { value } }) => {
    this.setState({value})
  };

  render() {
    const { value } = this.state;

    return (
      <TextArea
        value={value}
        onChange={this.onChange}
        placeholder="輸入文字"
        autoSize={{ minRows: 3, maxRows: 5 }}
      />
    );
  }
}
