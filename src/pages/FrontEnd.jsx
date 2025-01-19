// Ant Design
import { Row, Col } from "antd";
// import { Button, Flex } from "antd";
// import { Tabs } from "antd";

// Card Component
import Card from "./Card.jsx";

function FrontEnd() {
  return (
    <>
      {/* <div className="banner_parent">
        <Tabs defaultActiveKey="1" size="large" items={items} onChange={onChange}  />
      </div> */}
      <div className="banner_parent">
        <Row gutter={[20, 0]} align={"middle"}>
          <Col xs={24} sm={24} md={24} lg={9} xl={8}>
            <h1 className="page_title">FRONT-END</h1>
          </Col>
          <Col xs={24} sm={24} md={24} lg={15} xl={16}>
            <div className="subnav_parent">
              <div className="subnav_item">HTML</div>
              <div className="subnav_item">CSS</div>
              <div className="subnav_item">JavaScript</div>
              <div className="subnav_item">Test</div>
            </div>
          </Col>
        </Row>
      </div>

      {/* Sub Nav */}
      {/* <div className="subnav_parent">
        <Flex gap="small" wrap justify="flex-end">
          <Button href="./#html">HTML</Button>
          <Button>CSS</Button>
          <Button>Javascript</Button>
          <Button>Default Button</Button>
        </Flex>
      </div> */}

      {/* Content */}
      <div style={{ padding: "20px" }}>
        {/* <h1 className="section_title" id="html">
          HTML
        </h1> */}
        <Row gutter={[20, 20]}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Row>
      </div>
    </>
  );
}

export default FrontEnd;
