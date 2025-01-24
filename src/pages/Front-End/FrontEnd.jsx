// Ant Design
import { Row, Col } from "antd";

// React Router
import { NavLink, Outlet } from "react-router";

// SubNavBanner Component
import SubNavBanner from "../Components/SubNavBanner.jsx";

// Card Component CSS
import Card from "../Card.jsx";

function FrontEnd() {
  const links = [
    { path: "html", navLabel: "HTML" },
    { path: "css", navLabel: "CSS" },
    { path: "javascript", navLabel: "JavaScript" },
  ];

  return (
    <>
      {/* Banner */}

      <SubNavBanner title="Front-end" links={links} />
      <div className="section_parent">
        <Row gutter={[20, 20]}>
          <Outlet />
        </Row>
      </div>
    </>
  );
}

export default FrontEnd;
