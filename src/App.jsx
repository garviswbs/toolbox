import React from "react";
// React Router
import { BrowserRouter, Routes, Route } from "react-router";
// Assets
import githubIcon from "./assets/github-mark.png";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="side_nav_parent">
        {/* TITLE - TOP */}
        <div className="side_nav_content">
          <div className="nav_header">
            <span class="material-icons-round" style={{ fontSize: "55px", color: "#693100" }}>
              construction
            </span>
          </div>

          {/* LINKS - MIDDLE */}
          <div className="nav_links_parent">
            {/* Home Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">home</span>
              </div>
              <div className="nav_item_text">Home</div>
            </div>
            {/* Front-End Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">code</span>
              </div>
              <div className="nav_item_text">Front-end</div>
            </div>
            {/* Back-End Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">dns</span>
              </div>
              <div className="nav_item_text">Back-end</div>
            </div>
            {/* Design Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">color_lens</span>
              </div>
              <div className="nav_item_text">Design</div>
            </div>
            {/* Testing Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">bug_report</span>
              </div>
              <div className="nav_item_text">Testing</div>
            </div>
            {/* Testing Link */}
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">emoji_objects</span>
              </div>
              <div className="nav_item_text">Inspiration</div>
            </div>
          </div>

          {/* Footer - Bottom */}
          <div className="nav_footer">
            <div className="footer_icon">
              <img src={githubIcon} alt="github" style={{ width: "25px" }} />
              {/* <span class="material-icons-round">hub</span> */}
            </div>
            <div className="footer_text">GitHub</div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="main_content_parent">
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
      </div>
    </BrowserRouter>
  );
}

export default App;
