import React from "react";
import "../style/Home.css";
import ChineseTrans from '../../components/views/ChineseTrans';
import ImageBed from '../../components/views/ImageBed';
import ExportPDF from '../../components/views/ExportPDF';

import { connect } from 'react-redux';
import { setChineseTrans } from '../../store/actions';

import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InteractionOutlined,
  AreaChartOutlined,
  FilePdfOutlined
} from "@ant-design/icons";
const { Header, Sider, Content } = Layout;

class Home extends React.Component {
  state = {
    collapsed: false,
    showChineseTrans: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  switchModule = (item) => {
    
  }

  componentDidMount() {
    // const chineseTrans = this.props
    // this.state.showChineseTrans = chineseTrans.chineseTrans
    // console.log('chineseTrans', chineseTrans)
    // console.log('showChineseTrans', this.state.showChineseTrans)
  }

  render() {
    // const chineseTrans = this.props
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]} onClick={this.switchModule}>
            <Menu.Item key="1" icon={<InteractionOutlined />}>
              簡繁轉換
            </Menu.Item>
            <Menu.Item key="2" icon={<AreaChartOutlined />}>
              圖床
            </Menu.Item>
            <Menu.Item key="3" icon={<FilePdfOutlined />}>
              導出 PDF
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
            <ChineseTrans></ChineseTrans>
            <ImageBed></ImageBed>
            <ExportPDF></ExportPDF>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStatetoProps = (state) => {
  return {
    chineseTrans: state.chineseTrans,
  }
}

const mapDispatchtoProps = (dispatch, ownProps) => {
  return {
    setChineseTrans(data) {
      dispatch(setChineseTrans(data))
    },
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Home)
