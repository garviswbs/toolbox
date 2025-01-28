import React from "react";
// React Router
import { HashRouter, Routes, Route, NavLink, useLocation } from "react-router";
// Home Page
import Home from "./pages/Home.jsx";
// Front-End Pages
import FrontEnd from "./pages/Front-End/FrontEnd.jsx";
import FrontEndLanding from "./pages/Front-End/FrontEndLanding.jsx";
import HTML from "./pages/Front-End/HTML.jsx";
import CSS from "./pages/Front-End/CSS.jsx";
import JavaScript from "./pages/Front-End/JavaScript.jsx";
// Back-End Pages
import BackEnd from "./pages/Back-End/BackEnd.jsx";
import BackEndLanding from "./pages/Back-End/BackEndLanding.jsx";
import NodeJS from "./pages/Back-End/NodeJS.jsx";
import Database from "./pages/Back-End/Database.jsx";
import Express from "./pages/Back-End/Express.jsx";

import Design from "./pages/Design.jsx";
import Testing from "./pages/Testing.jsx";
import Resources from "./pages/Resources.jsx";
import Info from "./pages/Info/Info.jsx";
// Components
import SubNavBanner from "./pages/Components/SubNavBanner.jsx";
// Assets
import githubIcon from "./assets/github-mark.png";

// CSS
import "./App.css";
import "./pages/subpage.css";

function App() {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
}

function AppContent() {
  // useScrollToTop(); // Use the custom hook

  // React Router Use Location Hook to get the current URL
  const location = useLocation();
  // Split the URL path and get the parent path
  const parentPath = `/${location.pathname.split("/")[1]}`;
  console.log(parentPath + "=PARENT PATH");

  // Get & Set banner properties based on the current location path
  const getBannerProps = () => {
    // const parentPath = `/${location.pathname.split("/")[1]}`;
    // console.log(parentPath + parentPath + parentPath + parentPath);
    switch (parentPath) {
      case "/front-end":
        return {
          title: "Front-end",
          parentPath: "front-end",
          links: [
            { path: "/html", navLabel: "HTML", headerLabel: "/HTML" },
            { path: "/css", navLabel: "CSS", headerLabel: "/CSS" },
            { path: "/javascript", navLabel: "JavaScript", headerLabel: "/JavaScript" },
          ],
        };
      case "/back-end":
        return {
          title: "Back-end",
          links: [
            { path: "nodejs", navLabel: "Node.js", headerLabel: "/Node.js" },
            { path: "database", navLabel: "Database", headerLabel: "/Database" },
            { path: "express", navLabel: "Express", headerLabel: "/Express" },
          ],
        };
      case "/design":
        return {
          title: "Design",
          links: [
            { path: "uiux", navLabel: "UI/UX", headerLabel: "/UI & UX" },
            { path: "color", navLabel: "Color", headerLabel: "/Color" },
            { path: "media", navLabel: "Media", headerLabel: "/Media" },
            { path: "icons", navLabel: "Icons", headerLabel: "/Icons" },
            { path: "inspo", navLabel: "Inspo", headerLabel: "/Inspo" },
          ],
        };
      case "/testing":
        return {
          title: "Testing",
          links: [
            { path: "/validate", navLabel: "Validation", headerLabel: "/Validation" },
            { path: "optimize", navLabel: "Optimize", headerLabel: "/Optimize" },
            { path: "deploy", navLabel: "Deploy", headerLabel: "/Deploy" },
            { path: "icons", navLabel: "Icons", headerLabel: "/Icons" },
          ],
        };
      default:
        return null;
    }
  };

  // Get the banner properties based on the current location path.
  const bannerProps = getBannerProps();

  return (
    <>
      <div className="side_nav_parent">
        <div className="side_nav_content">
          {/* TITLE & Site Icon- TOP */}
          <NavLink className="header_item" to="/">
            <div className="header_item_icon">
              <span className="material-icons-round">construction</span>
            </div>
            <div className="header_item_text">TOOLBOX</div>
          </NavLink>

          {/* LINKS - MIDDLE */}
          <div className="nav_links_parent">
            {/* Front-End Link */}
            <NavLink className="nav_item" to="/front-end">
              <div className="nav_item_icon">
                <span className="material-icons-round">code</span>
              </div>
              <div className="nav_item_text">Front-end</div>
            </NavLink>

            {/* Back-End Link */}
            <NavLink className="nav_item" to="/back-end">
              <div className="nav_item_icon">
                <span className="material-icons-round">dns</span>
              </div>
              <div className="nav_item_text">Back-end</div>
            </NavLink>
            {/* Design Link */}
            <NavLink className="nav_item" to="/design">
              <div className="nav_item_icon">
                <span className="material-icons-round">color_lens</span>
              </div>
              <div className="nav_item_text">Design</div>
            </NavLink>
            {/* Testing Link */}
            <NavLink className="nav_item" to="/testing">
              <div className="nav_item_icon">
                <span className="material-icons-round">bug_report</span>
              </div>
              <div className="nav_item_text">Testing</div>
            </NavLink>
            {/* Testing Link */}
            <NavLink className="nav_item" to="/resources">
              <div className="nav_item_icon">
                <span className="material-icons-round">emoji_objects</span>
              </div>
              <div className="nav_item_text">Resources</div>
            </NavLink>
          </div>
          {/* Project Info Link / Footer Link */}
          <NavLink className="nav_item" to="/info">
            <div className="nav_item_icon">
              <span className="material-icons-round">info</span>
            </div>
            <div className="nav_item_text">Project Info</div>
          </NavLink>
        </div>
      </div>
      {/* CONTENT */}
      <div className="main_content_parent">
        {bannerProps && <SubNavBanner {...bannerProps} />} {/* Conditionally render the SubNavBanner */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="front-end" element={<FrontEnd />}>
            <Route index element={<FrontEndLanding />} />
            <Route path="html" element={<HTML />} />
            <Route path="css" element={<CSS />} />
            <Route path="javascript" element={<JavaScript />} />
          </Route>
          <Route path="/back-end" element={<BackEnd />}>
            <Route index element={<BackEndLanding />} />
            <Route path="nodejs" element={<NodeJS />} />
            <Route path="database" element={<Database />} />
            <Route path="express" element={<Express />} />
          </Route>

          <Route path="/design" element={<Design />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

// function AppContent() {
// useLocation hook from react-router-dom
// const location = useLocation();
// console.log(location.pathname + "test");

// Get & Set banner properties based on the current location path
// const getBannerProps = () => {
//   switch (location.pathname) {
//     case "/front-end":
//       return {
//         title: "Front-end",
//         links: [
//           { path: "html", navLabel: "HTML", headerLabel: "/HTML" },
//           { path: "css", navLabel: "CSS", headerLabel: "/CSS" },
//           { path: "javascript", navLabel: "JavaScript", headerLabel: "/JavaScript" },
//         ],
//       };
//     case "/back-end":
//       return {
//         title: "Back-end",
//         links: [
//           { path: "subpage1", navLabel: "Subpage 1", headerLabel: "/Subpage 1" },
//           { path: "subpage2", navLabel: "Subpage 2", headerLabel: "/Subpage 2" },
//           { path: "subpage3", navLabel: "Subpage 3", headerLabel: "/Subpage 3" },
//         ],
//       };
//     default:
//       return null;
//   }
// };

// // Get the banner properties based on the current location path.
// const bannerProps = getBannerProps();
