// React Router
import { Outlet } from "react-router";
// Ant Design
import { Row } from "antd";
// SubNavBanner Component
import SubNavBanner from "../Components/SubNavBanner.jsx";

function FrontEnd() {
  const links = [
    { path: "html", navLabel: "HTML" },
    { path: "css", navLabel: "CSS" },
    { path: "javascript", navLabel: "JavaScript" },
  ];

  return (
    <>
      {/* Banner */}
      <SubNavBanner links={links} />

      {/* Content */}
      <div className="section_parent">
        <Row gutter={[20, 20]}>
          <Outlet />
        </Row>
      </div>
    </>
  );
}

export default FrontEnd;
