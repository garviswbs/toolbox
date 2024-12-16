import { useState } from "react";
import "./App.css";
import { MenuFoldOutlined, MenuUnfoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined } from "@ant-design/icons";
import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <UserOutlined />,
              label: "nav 1",
            },
            {
              key: "2",
              icon: <VideoCameraOutlined />,
              label: "nav 2",
            },
            {
              key: "3",
              icon: <UploadOutlined />,
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <ul>
            <li>Welcome/All</li>
            <li>Dev Tools</li>
            <li>Frontend</li>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JS</li>
              <li></li>
              <li></li>
            </ul>
            <li>Backend</li>
            <li>Design</li>
            <ul>
              <li>UI</li>
              <li>UX</li>
              <li>Color</li>
              <li>Images</li>
              <li>Icons</li>
            </ul>
            <li>Testing</li>
            <li>Inspiration</li>
            <li>Resources</li>
          </ul>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;

// // Ant Design
// import { Col, Row } from "antd";

// // AntDesign
// import { Button } from "antd";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <>

//       {/* <Row style={{ height: "200px", backgroundColor: "#fff6eb" }}>
//         <Col span={24}></Col>
//       </Row> */}

//       {/* <Row>
//         <Col span={18} push={6}>
//           col-18 col-push-6
//         </Col>
//         <Col span={6} pull={18}>
//           col-6 col-pull-18
//         </Col>
//       </Row> */}
//       {/* <div className="card">
//         <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

//       </div> */}
//     </>
//   );
// }

// export default App;
