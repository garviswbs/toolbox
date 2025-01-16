// Ant Design
import { Row } from "antd";
import { Button, Flex } from "antd";

// Card Component
import Card from "./Card.jsx";

function FrontEnd() {
  return (
    <div>
      <div className="banner_parent">
        <div className="banner_content">
          <h1 className="page_title">FRONT-END</h1>

          <p style={{ width: "50%" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>

      {/* Sub Nav */}
      <div className="subnav_parent">
        <Flex gap="small" wrap>
          <Button href="./#html">HTML</Button>
          <Button>CSS</Button>
          <Button>Javascript</Button>
          <Button>Default Button</Button>
        </Flex>
      </div>

      {/* Content */}
      <div style={{ padding: "20px" }}>
        <h1 className="section_title" id="html">
          HTML
        </h1>
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
    </div>
  );
}

export default FrontEnd;
