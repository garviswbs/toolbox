// Ant Design
import { Row, Col } from "antd";

// React Router
import { NavLink, Outlet } from "react-router";

// Card Component CSS
import Card from "../Card.jsx";

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
            {/* <NavLink className="subnav_item" to="all">
              <p>All</p>
            </NavLink> */}
            <NavLink className="subnav_item" to="html">
              <p>HTML</p>
            </NavLink>
            <NavLink className="subnav_item" to="css">
              <p>CSS</p>
            </NavLink>
            <NavLink className="subnav_item" to="javascript">
              <p>JavaScript</p>
            </NavLink>
          </Col>
        </Row>
      </div>
      {/* Content */}
      <div style={{ padding: "20px" }}>
        {/* <h1 className="section_title" id="html">
          HTML
        </h1> */}

        <Row gutter={[20, 20]}>
          <Outlet />
          {/* <Routes>
            <Route path=".//" element={<All />} />
            <Route path="./html" element={<HTML />} />
            <Route path="./css" element={<CSS />} />
            <Route path="./javascript" element={<JavaScript />} />
          </Routes> */}
          {/* <Route path="/front-end/*" element={<FrontEnd />} /> */}

          {/* <Card />
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
          <Card /> */}
        </Row>
      </div>
    </>
  );
}

export default FrontEnd;
