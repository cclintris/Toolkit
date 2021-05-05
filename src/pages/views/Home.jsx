import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import "../style/Home.css";
import ChineseTrans from "../../components/views/ChineseTrans";
import ExportPDF from "../../components/views/ExportPDF";
import ImageBed from "../../components/views/ImageBed";
import ReduxExample from "../../components/views/ReduxExample";

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InteractionOutlined,
  AreaChartOutlined,
  FilePdfOutlined,
  RedditOutlined,
  FieldNumberOutlined,
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  switchModule = (item) => {
    const key = item.key;
    switch (key) {
      case "2":
        this.props.history.push("/chineseTrans");
        break;
      case "3":
        this.props.history.push("/imageBed");
        break;
      case "4":
        this.props.history.push("/exportPDF");
        break;
      case "5":
        this.props.history.push("/reduxExample");
        break;
      default:
        console.log("No module found!");
    }
  };

  componentDidMount() {
    this.props.history.push("/");
  }

  render() {
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={["1"]}
            onClick={this.switchModule}
          >
            <Menu.Item key="1" icon={<RedditOutlined />} />
            <Menu.Item key="2" icon={<InteractionOutlined />}>
              簡繁轉換
            </Menu.Item>
            <Menu.Item key="3" icon={<AreaChartOutlined />}>
              圖床
            </Menu.Item>
            <Menu.Item key="4" icon={<FilePdfOutlined />}>
              導出 PDF
            </Menu.Item>
            <Menu.Item key="5" icon={<FieldNumberOutlined />}>
              Redux 範例 counter
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background">
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
            {/* <span></span> */}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 20,
            }}
          >
            <Switch>
              <Route exact path="/"></Route>
              <Route path="/chineseTrans" component={ChineseTrans}></Route>
              <Route path="/exportPDF" component={ExportPDF}></Route>
              <Route path="/imageBed" component={ImageBed}></Route>
              <Route path="/reduxExample" component={ReduxExample}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default withRouter(Home);
