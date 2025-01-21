// Ant Design
import { Row, Col } from "antd";

function Design() {
  return (
    <>
      {/* Banner */}
      <div className="banner_parent">
        <Row gutter={[20, 0]} style={{ minHeight: "75px" }}>
          <Col xs={24} sm={24} md={24} lg={9} xl={8} className="page_title_parent">
            <h1>Design</h1>
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
      <div>
        <h1>DESIGN DESIGN DESIGN</h1>
        <p> Welcome to the Home Page</p>
      </div>
    </>
  );
}

export default Design;
