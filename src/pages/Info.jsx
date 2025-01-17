// Ant Design
import { Tooltip } from "antd";

// Css
import "./Info.css";

function Info() {
  return (
    <>
      <div className="banner_parent">
        <div className="banner_content">
          <h1 className="page_title">Info</h1>

          <p style={{ width: "50%", float: "right" }}>
            <strong>Toolbox</strong> is a project that aims to provide a collection of resources for developers and designers. The UI has been designed to mimick an integration dashboard with pages,
            subpages, and cards. The project is built using React, Vite, React Router, Material Symbols, styled-components, and Ant Design layout components. Each tile includes a link to the resource
            website. If applicable, a link to a personal sample page is also included.
          </p>
        </div>
      </div>
      {/* Page Content */}
      <div className="section_parent">
        <h1 className="section_title" style={{ marginBottom: "10px" }}>
          Style Guide
        </h1>

        <h3 style={{ marginBottom: "10px" }}>Color Palette: Coffee</h3>
        {/* Dark Brown */}
        <div className="color_box_parent">
          <Tooltip title="Copy Hex Code" placement="right">
            <div className="color_box" style={{ backgroundColor: "#693100" }}></div>{" "}
          </Tooltip>
          <div className="color_description">
            #693100 <br />
            Nutmeg Wood Finish
          </div>
        </div>

        {/* Dark Tan */}
        <div className="color_box_parent">
          <div className="color_box" style={{ backgroundColor: "#f6eadb" }}></div>
          <div className="color_description">
            #f6eadb <br />
            Janna
          </div>
        </div>
        {/* Light Tan */}
        <div className="color_box_parent">
          <div className="color_box" style={{ backgroundColor: "#fff6eb" }}></div>
          <div className="color_description">
            #fff6eb <br />
            Serenade
          </div>
        </div>
        {/* Orange */}
        <div className="color_box_parent">
          <div className="color_box" style={{ backgroundColor: "#FF4C00 " }}></div>
          <div className="color_description">
            #FF4C00 <br />
            Vermilion
          </div>
        </div>
        <h3>Fonts: Montserrat</h3>
        <h3>Icons: Material Icons</h3>
        <h3></h3>
      </div>
    </>
  );
}

export default Info;
