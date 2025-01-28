import React from "react";
// React Router
import { HashRouter, Routes, Route, NavLink, useLocation } from "react-router";
// Home Page
import Home from "./pages/Home.jsx";
// Page Layout
import MainContent from "./Components/MainContent.jsx";
// Landing Pages
import FrontEndLanding from "./pages/Front-End/FrontEndLanding.jsx";
import BackEndLanding from "./pages/Back-End/BackEndLanding.jsx";
import DesignLanding from "./pages/Design/DesignLanding.jsx";
import TestingLanding from "./pages/Testing/TestingLanding.jsx";
import ResourcesLanding from "./pages/Resources/ResourcesLanding.jsx";
// Page
import Info from "./pages/Info/Info.jsx";
// Default Card Layout
import CardLayout from "./Components/CardLayout.jsx";
// Components
import SubNavBanner from "./Components/SubNavBanner.jsx";
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
  // React Router Use Location Hook to get the current URL
  const location = useLocation();
  // Split the URL path and get the parent path
  const parentPath = `/${location.pathname.split("/")[1]}`;
  console.log("PARENT PATH = " + parentPath);
  // Get & Set banner properties based on the current location path
  const getBannerProps = () => {
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
          parentPath: "back-end",
          links: [
            { path: "/nodejs", navLabel: "Node.js", headerLabel: "/Node.js" },
            { path: "/database", navLabel: "Database", headerLabel: "/Database" },
            { path: "/express", navLabel: "Express", headerLabel: "/Express" },
          ],
        };
      case "/design":
        return {
          title: "Design",
          parentPath: "design",
          links: [
            { path: "/uiux", navLabel: "UI/UX", headerLabel: "/UI & UX" },
            { path: "/color", navLabel: "Color", headerLabel: "/Color" },
            { path: "/media", navLabel: "Media", headerLabel: "/Media" },
            { path: "/icons", navLabel: "Icons", headerLabel: "/Icons" },
            { path: "/inspo", navLabel: "Inspo", headerLabel: "/Inspo" },
          ],
        };
      case "/testing":
        return {
          title: "Testing",
          parentPath: "testing",
          links: [
            { path: "/validate", navLabel: "Validate", headerLabel: "/Validate" },
            { path: "/optimize", navLabel: "Optimize", headerLabel: "/Optimize" },
            { path: "/deploy", navLabel: "Deploy", headerLabel: "/Deploy" },
          ],
        };
      case "/resources":
        return {
          title: "Resources",
          parentPath: "resources",
          links: [
            { path: "/subpage1", navLabel: "Sub Page 1", headerLabel: "/Sub Page 1" },
            { path: "/subpage2", navLabel: "Sub Page 2", headerLabel: "/Sub Page 2" },
            { path: "/subpage3", navLabel: "Sub Page 3", headerLabel: "/Sub Page 3" },
          ],
        };
      case "/project-info":
        return {
          title: "Project Info",
          parentPath: "project-info",
          links: [],
          // links: [
          //   { path: "/subpage1", navLabel: "Sub Page 1", headerLabel: "/Sub Page 1" },
          //   { path: "/subpage2", navLabel: "Sub Page 2", headerLabel: "/Sub Page 2" },
          //   { path: "/subpage3", navLabel: "Sub Page 3", headerLabel: "/Sub Page 3" },
          // ],
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
          <NavLink className="nav_item" to="/project-info">
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
          <Route path="front-end" element={<MainContent />}>
            <Route index element={<FrontEndLanding />} />
            <Route path="html" element={<CardLayout cardLayoutTitle="HTML Content" />} />
            <Route path="css" element={<CardLayout cardLayoutTitle="CSS Content" />} />
            <Route path="javascript" element={<CardLayout cardLayoutTitle="Javascript Content" />} />
          </Route>
          <Route path="back-end" element={<MainContent />}>
            <Route index element={<BackEndLanding />} />
            <Route path="nodejs" element={<CardLayout cardLayoutTitle="Node Content" />} />
            <Route path="database" element={<CardLayout cardLayoutTitle="DB Content" />} />
            <Route path="express" element={<CardLayout cardLayoutTitle="Express Content" />} />
          </Route>
          <Route path="design" element={<MainContent />}>
            <Route index element={<DesignLanding />} />
            <Route path="uiux" element={<CardLayout cardLayoutTitle="UI/UX Content" />} />
            <Route path="color" element={<CardLayout cardLayoutTitle="Color Content" />} />
            <Route path="media" element={<CardLayout cardLayoutTitle="Media Content" />} />
            <Route path="icons" element={<CardLayout cardLayoutTitle="Icons Content" />} />
            <Route path="inspo" element={<CardLayout cardLayoutTitle="Inspo Content" />} />
          </Route>
          <Route path="testing" element={<MainContent />}>
            <Route index element={<TestingLanding />} />
            <Route path="validate" element={<CardLayout cardLayoutTitle="Testing Content" />} />
            <Route path="optimize" element={<CardLayout cardLayoutTitle="Optimize Content" />} />
            <Route path="deploy" element={<CardLayout cardLayoutTitle="Deploy Content" />} />
          </Route>
          <Route path="resources" element={<MainContent />}>
            <Route index element={<ResourcesLanding />} />
            <Route path="subpage1" element={<CardLayout cardLayoutTitle="Sub Page 1 Content" />} />
            <Route path="subpage2" element={<CardLayout cardLayoutTitle="Sub Page 2 Content" />} />
            <Route path="subpage3" element={<CardLayout cardLayoutTitle="Sub Page 3 Content" />} />
          </Route>
          <Route path="project-info" element={<Info />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
