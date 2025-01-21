// Ant Design
import { Row, Col } from "antd";

// Card Component
import Card from "./Card.jsx";

function FrontEnd() {
  return (
    <>
      {/* Banner */}
      <div className="banner_parent">
        <Row gutter={[20, 0]} style={{ minHeight: "75px" }}>
          <Col xs={24} sm={24} md={24} lg={9} xl={8} className="page_title_parent">
            <h1>Front-end</h1>
          </Col>
          <Col xs={24} sm={24} md={24} lg={15} xl={16} className="subnav_parent">
            <div className="subnav_item">
              <p>HTML</p>
            </div>
            <div className="subnav_item">
              <p>CSS</p>
            </div>
            <div className="subnav_item">
              <p>JavaScript</p>
            </div>
            <div className="subnav_item">
              <p>Test</p>
            </div>
          </Col>
        </Row>
      </div>
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
