// Ant Design
import { Row, Col } from "antd";
// React Router
import { NavLink, useLocation } from "react-router";

function SubNavBanner({ title, parentPath, links }) {
  // console.log("IMPORTED LOCATION" + location);
  // Get current pathname
  const location = useLocation();
  // Split pathname into and array and get parent and child page name
  const pathSegments = location.pathname.split("/").filter(Boolean);
  // Conditionally render parent page name.  Default to "home" if it doesn't exist.
  const parentPage = pathSegments[0] || "home";
  // Conditionally render child page name and add a slash if it exists.  Empty if it doesn't.
  const childPath = pathSegments[1] ? " / " + pathSegments[1] : "";

  // console.log("Pathname:", location.pathname);
  // console.log("Path Segments:", pathSegments);
  // console.log("Parent Page:", parentPage);
  // console.log("Child Page:", childPath);

  // Scroll to top when subnav link is clicked
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "instant" });
  };

  return (
    <div className="banner_parent">
      <Row gutter={[20, 0]} style={{ minHeight: "75px" }}>
        <Col xs={24} sm={24} md={24} lg={11} xl={8} className="page_title_parent">
          <h1>
            {title}
            <span className="page_title_child">{childPath}</span>
          </h1>
        </Col>
        <Col xs={24} sm={24} md={24} lg={13} xl={16} className="subnav_parent">
          {links.map((link, index) => (
            <NavLink onClick={() => handleLinkClick()} key={index} className="subnav_item" to={parentPath + link.path}>
              <p>{link.navLabel}</p>
            </NavLink>
          ))}
        </Col>
      </Row>
    </div>
  );
}

export default SubNavBanner;
