// React Router
import { Outlet } from "react-router";
// Ant Design
import { Row } from "antd";
// SubNavBanner Component
import SubNavBanner from "../Components/SubNavBanner.jsx";

function BackEnd() {
  const links = [
    { path: "nodejs", navLabel: "Node.JS" },
    { path: "database", navLabel: "DB" },
    { path: "express", navLabel: "Express" },
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

export default BackEnd;
