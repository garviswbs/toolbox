import React from "react";
// Pages
import Home from "./pages/Home.jsx";
// Front-End Pages
import FrontEnd from "./pages/Front-End/FrontEnd.jsx";
import HTML from "./pages/Front-End/HTML.jsx";
import CSS from "./pages/Front-End/CSS.jsx";
import JavaScript from "./pages/Front-End/JavaScript.jsx";
// Back-End Pages
import BackEnd from "./pages/BackEnd.jsx";
import Design from "./pages/Design.jsx";
import Testing from "./pages/Testing.jsx";
import Resources from "./pages/Resources.jsx";
import Info from "./pages/Info.jsx";

// React Router
import { HashRouter, Routes, Route, NavLink } from "react-router";
// Assets
import githubIcon from "./assets/github-mark.png";

import "./App.css";
import "./pages/subpage.css";

let pages = [
  { page: "Front-end", link: "/front-end", subPages: ["HTML", "CSS", "JavaScript", "Test"] },
  { page: "Back-end", link: "/back-end", subPages: ["Node.js", "Express", "MongoDB", "SQL"] },
  { page: "Design", link: "/design", subPages: ["UI", "UX", "Color", "Images + Video", "Icons", "Fonts"] },
  { page: "Testing", link: "/testing", subPages: ["Unit", "Integration", "End-to-End", "Performance"] },
  { page: "Inspiration", link: "/inspiration", subPages: ["UI", "UX", "Color", "Images + Video", "Icons", "Fonts"] },
];

function App() {
  return (
    <HashRouter>
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

          {/* Footer - Bottom */}
          {/* <a href="https://github.com/garviswbs" target="_blank" style={{ textDecoration: "none" }}>
            <div className="nav_footer">
              <div className="footer_icon">
                <img src={githubIcon} alt="github" style={{ width: "25px" }} />
              </div>
              <div className="footer_text">GitHub</div>
            </div>
          </a> */}
          {/* Testing Link */}
          <NavLink className={"nav_item"} to="/info">
            <div className="nav_item_icon">
              <span className="material-icons-round">info</span>
            </div>
            <div className="nav_item_text">Project Info</div>
          </NavLink>
        </div>
      </div>

      {/* CONTENT */}
      {/* <div className="main_content_parent">
        <ul>
          <li>Welcome/All</li>
          <li>Dev Tools</li>
          <li>Frontend</li>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JS</li>
            <li></li>
            <li></li>
          </ul>
          <li>Backend</li>
          <li>Design</li>
          <ul>
            <li>UI</li>
            test
            <li>UX</li>
            <li>Color</li>
            <li>Images + Video</li>
            <li>Icons</li>
            <li>Fonts</li>
          </ul>
          <li>Testing</li>
          <li>Inspiration</li>
          <li>Resources</li>
          <li>
            {" "}
            Lorem ipsum odor amet, consectetuer adipiscing elit. Congue taciti sagittis id; luctus lacus sit tempus natoque. Et habitant nostra at parturient efficitur neque. Consectetur gravida
            lectus consectetur, et vulputate aenean. Fermentum leo cras mus aenean scelerisque risus ridiculus torquent maecenas. Accumsan mus purus lobortis rhoncus torquent suscipit natoque
            faucibus. Rutrum ornare ornare augue nascetur ad ultricies. Ex ullamcorper ridiculus vulputate dolor pretium sollicitudin sagittis. Rutrum ligula integer risus habitant montes scelerisque
            commodo dolor. Class luctus volutpat placerat libero sociosqu lorem. Vehicula tristique ac metus facilisi porttitor. Nullam fermentum dis dapibus netus conubia aliquam sem. Litora taciti
            turpis vivamus lectus metus himenaeos commodo; quam ante? Aliquam dis felis aptent aenean odio, luctus sem. Neque mattis per odio convallis habitasse volutpat. Morbi turpis neque, non
            netus nisi suspendisse taciti? Aliquam cras tellus scelerisque magna risus tincidunt nullam? Iaculis gravida purus aliquet; pharetra ligula rhoncus blandit lobortis. Habitant praesent
            dapibus tellus erat viverra bibendum per. Massa convallis est venenatis a semper et. Suscipit ridiculus scelerisque semper lectus ex; purus erat non. Hac a sed cras gravida curabitur urna
            cras consectetur cursus. Ultricies volutpat nostra mi pulvinar, pretium aliquet eleifend lectus. Nostra quam taciti pharetra sed lacinia maximus laoreet. Vestibulum tortor litora vulputate
            inceptos metus, habitant morbi sagittis. Elit luctus convallis parturient vivamus maecenas maecenas iaculis. Erat etiam cursus ut orci habitant cubilia in maecenas. Sagittis nisi lacinia
            viverra arcu phasellus faucibus dis. Justo natoque fringilla ad gravida bibendum magnis luctus lacinia. Curabitur egestas nisl natoque; molestie conubia suspendisse. Lacinia inceptos
            fringilla commodo, hendrerit quam dictum imperdiet. Elit auctor mauris magna eleifend natoque nascetur. Turpis mauris etiam aliquet tristique suspendisse tellus metus pharetra? Blandit
            ligula pharetra libero habitasse feugiat fusce blandit suspendisse. Molestie facilisi duis maximus gravida, ipsum fames turpis aliquet. Potenti sapien semper suscipit sem pharetra ad
            pellentesque. Facilisis dapibus vel platea sed justo habitasse. Suscipit justo leo ipsum viverra amet est elit. Maximus penatibus cubilia lacus ligula praesent, consectetur ex. Lorem ipsum
            odor amet, consectetuer adipiscing elit. Congue taciti sagittis id; luctus lacus sit tempus natoque. Et habitant nostra at parturient efficitur neque. Consectetur gravida lectus
            consectetur, et vulputate aenean. Fermentum leo cras mus aenean scelerisque risus ridiculus torquent maecenas. Accumsan mus purus lobortis rhoncus torquent suscipit natoque faucibus.
            Rutrum ornare ornare augue nascetur ad ultricies. Ex ullamcorper ridiculus vulputate dolor pretium sollicitudin sagittis. Rutrum ligula integer risus habitant montes scelerisque commodo
            dolor. Class luctus volutpat placerat libero sociosqu lorem. Vehicula tristique ac metus facilisi porttitor. Nullam fermentum dis dapibus netus conubia aliquam sem. Litora taciti turpis
            vivamus lectus metus himenaeos commodo; quam ante? Aliquam dis felis aptent aenean odio, luctus sem. Neque mattis per odio convallis habitasse volutpat. Morbi turpis neque, non netus nisi
            suspendisse taciti? Aliquam cras tellus scelerisque magna risus tincidunt nullam? Iaculis gravida purus aliquet; pharetra ligula rhoncus blandit lobortis. Habitant praesent dapibus tellus
            erat viverra bibendum per. Massa convallis est venenatis a semper et. Suscipit ridiculus scelerisque semper lectus ex; purus erat non. Hac a sed cras gravida curabitur urna cras
            consectetur cursus. Ultricies volutpat nostra mi pulvinar, pretium aliquet eleifend lectus. Nostra quam taciti pharetra sed lacinia maximus laoreet. Vestibulum tortor litora vulputate
            inceptos metus, habitant morbi sagittis. Elit luctus convallis parturient vivamus maecenas maecenas iaculis. Erat etiam cursus ut orci habitant cubilia in maecenas. Sagittis nisi lacinia
            viverra arcu phasellus faucibus dis. Justo natoque fringilla ad gravida bibendum magnis luctus lacinia. Curabitur egestas nisl natoque; molestie conubia suspendisse. Lacinia inceptos
            fringilla commodo, hendrerit quam dictum imperdiet. Elit auctor mauris magna eleifend natoque nascetur. Turpis mauris etiam aliquet tristique suspendisse tellus metus pharetra? Blandit
            ligula pharetra libero habitasse feugiat fusce blandit suspendisse. Molestie facilisi duis maximus gravida, ipsum fames turpis aliquet. Potenti sapien semper suscipit sem pharetra ad
            pellentesque. Facilisis dapibus vel platea sed justo habitasse. Suscipit justo leo ipsum viverra amet est elit. Maximus penatibus cubilia lacus ligula praesent, consectetur ex. Lorem ipsum
            odor amet, consectetuer adipiscing elit. Congue taciti sagittis id; luctus lacus sit tempus natoque. Et habitant nostra at parturient efficitur neque. Consectetur gravida lectus
            consectetur, et vulputate aenean. Fermentum leo cras mus aenean scelerisque risus ridiculus torquent maecenas. Accumsan mus purus lobortis rhoncus torquent suscipit natoque faucibus.
            Rutrum ornare ornare augue nascetur ad ultricies. Ex ullamcorper ridiculus vulputate dolor pretium sollicitudin sagittis. Rutrum ligula integer risus habitant montes scelerisque commodo
            dolor. Class luctus volutpat placerat libero sociosqu lorem. Vehicula tristique ac metus facilisi porttitor. Nullam fermentum dis dapibus netus conubia aliquam sem. Litora taciti turpis
            vivamus lectus metus himenaeos commodo; quam ante? Aliquam dis felis aptent aenean odio, luctus sem. Neque mattis per odio convallis habitasse volutpat. Morbi turpis neque, non netus nisi
            suspendisse taciti? Aliquam cras tellus scelerisque magna risus tincidunt nullam? Iaculis gravida purus aliquet; pharetra ligula rhoncus blandit lobortis. Habitant praesent dapibus tellus
            erat viverra bibendum per. Massa convallis est venenatis a semper et. Suscipit ridiculus scelerisque semper lectus ex; purus erat non. Hac a sed cras gravida curabitur urna cras
            consectetur cursus. Ultricies volutpat nostra mi pulvinar, pretium aliquet eleifend lectus. Nostra quam taciti pharetra sed lacinia maximus laoreet. Vestibulum tortor litora vulputate
            inceptos metus, habitant morbi sagittis. Elit luctus convallis parturient vivamus maecenas maecenas iaculis. Erat etiam cursus ut orci habitant cubilia in maecenas. Sagittis nisi lacinia
            viverra arcu phasellus faucibus dis. Justo natoque fringilla ad gravida bibendum magnis luctus lacinia. Curabitur egestas nisl natoque; molestie conubia suspendisse. Lacinia inceptos
            fringilla commodo, hendrerit quam dictum imperdiet. Elit auctor mauris magna eleifend natoque nascetur. Turpis mauris etiam aliquet tristique suspendisse tellus metus pharetra? Blandit
            ligula pharetra libero habitasse feugiat fusce blandit suspendisse. Molestie facilisi duis maximus gravida, ipsum fames turpis aliquet. Potenti sapien semper suscipit sem pharetra ad
            pellentesque. Facilisis dapibus vel platea sed justo habitasse. Suscipit justo leo ipsum viverra amet est elit. Maximus penatibus cubilia lacus ligula praesent, consectetur ex.
          </li>
        </ul>
      </div> */}
      <div className="main_content_parent">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="front-end" element={<FrontEnd />}>
            {/* <Route path="all" element={<All />} /> */}
            <Route path="html" element={<HTML />} />
            <Route path="css" element={<CSS />} />
            <Route path="javascript" element={<JavaScript />} />
          </Route>
          <Route path="/back-end" element={<BackEnd />} />
          <Route path="/design" element={<Design />} />
          <Route path="/testing" element={<Testing />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/info" element={<Info />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
