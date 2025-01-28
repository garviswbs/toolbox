// React Router
import { Outlet } from "react-router";
// Ant Design
import { Row } from "antd";
// SubNavBanner Component
import SubNavBanner from "../../Components/SubNavBanner.jsx";

function BackEnd() {
  return (
    <>
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
