import { Row, Col } from "antd";
import { NavLink } from "react-router";

function SubNavBanner({ title, links }) {
  return (
    <div className="banner_parent">
      <Row gutter={[20, 0]} style={{ minHeight: "75px" }}>
        <Col xs={24} sm={24} md={24} lg={9} xl={8} className="page_title_parent">
          <h1>{title}</h1>
        </Col>
        <Col xs={24} sm={24} md={24} lg={15} xl={16} className="subnav_parent">
          {links.map((link, index) => (
            <NavLink key={index} className="subnav_item" to={link.path}>
              <p>{link.navLabel}</p>
            </NavLink>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default SubNavBanner;
