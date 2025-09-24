import "./styles/_reset.scss";
import "./styles/_container.scss";
import React from "react";
import { Flex, Layout } from "antd";
import Header from "./components/Header/Header";

const { Footer, Sider, Content } = Layout;

// const headerStyle: React.CSSProperties = {
//   textAlign: "center",
//   color: "#fff",
//   height: 64,
//   paddingInline: 48,
//   lineHeight: "64px",
//   backgroundColor: "#4096ff",
// };

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#0958d9",
};

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const footerStyle: React.CSSProperties = {
  textAlign: "center",
  color: "#fff",
  backgroundColor: "#4096ff",
};

const layoutStyle = {
  overflow: "hidden",
  width: "100%",
  height: "100vh",
};

const App: React.FC = () => {
  return (
    <Flex>
      <Layout style={layoutStyle}>
        <Header />
        <Layout>
          <Sider width="25%" style={siderStyle}>
            Sider
          </Sider>
          <Content style={contentStyle}>Content</Content>
        </Layout>
        <Footer style={footerStyle}>Footer</Footer>
      </Layout>
    </Flex>
  );
};

export default App;
