import React from "react";
import logo from "../favicon-toolbox.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="side_nav_parent">
        <div className="side_nav_content">
          <div className="nav_header">
            <span class="material-icons-round" style={{ fontSize: "55px", color: "#693100" }}>
              construction
            </span>
          </div>
          <div className="nav_links">
            <div className="nav_item ">
              <div className="nav_item_icon">
                <span class="material-icons-round">home</span>
                {/* <span class="material-symbols-rounded">code</span> */}
              </div>
              <div className="nav_item_text">Front-end</div>
            </div>
            {/* <div className="nav_item ">Front-end</div>
            <div className="nav_item ">Back-end</div>
            <div className="nav_item ">Design</div>
            <div className="nav_item ">Testing</div>
            <div className="nav_item ">Inspiration</div> */}
          </div>
          <div className="nav_footer">
            <div className="footer_icon">
              <span class="material-icons-round" style={{ fontSize: "25px" }}>
                hub
              </span>
            </div>
            <div className="footer_text">Github</div>
          </div>
          {/* <div className="nav_title_parent">
            //{" "}
            <div className="nav_logo">
              // <img src={logo} alt="logo" style={{ width: "100%" }} />
              //{" "}
            </div>
            // <div className="nav_title">Toolbox</div>
            //{" "}
          </div>{" "} */}

          {/* <div className="nav_item_parent ">
            <div className="item-test">TITLE </div>
            <div className="item-test">
              <div className="nav_item ">Welcome</div>
              <div className="nav_item ">Dev Tools</div>
              <div className="nav_item ">Front-end</div>
              <div className="nav_item ">Back-end</div>
              <div className="nav_item ">Design</div>
              <div className="nav_item ">Testing</div>
              <div className="nav_item ">Inspiration</div>
            </div>
            <div className="item-test">SUBTITLE</div>
          </div> */}
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
        </ul>
        Lorem ipsum odor amet, consectetuer adipiscing elit. Congue taciti sagittis id; luctus lacus sit tempus natoque. Et habitant nostra at parturient efficitur neque. Consectetur gravida lectus
        consectetur, et vulputate aenean. Fermentum leo cras mus aenean scelerisque risus ridiculus torquent maecenas. Accumsan mus purus lobortis rhoncus torquent suscipit natoque faucibus. Rutrum
        ornare ornare augue nascetur ad ultricies. Ex ullamcorper ridiculus vulputate dolor pretium sollicitudin sagittis. Rutrum ligula integer risus habitant montes scelerisque commodo dolor. Class
        luctus volutpat placerat libero sociosqu lorem. Vehicula tristique ac metus facilisi porttitor. Nullam fermentum dis dapibus netus conubia aliquam sem. Litora taciti turpis vivamus lectus
        metus himenaeos commodo; quam ante? Aliquam dis felis aptent aenean odio, luctus sem. Neque mattis per odio convallis habitasse volutpat. Morbi turpis neque, non netus nisi suspendisse taciti?
        Aliquam cras tellus scelerisque magna risus tincidunt nullam? Iaculis gravida purus aliquet; pharetra ligula rhoncus blandit lobortis. Habitant praesent dapibus tellus erat viverra bibendum
        per. Massa convallis est venenatis a semper et. Suscipit ridiculus scelerisque semper lectus ex; purus erat non. Hac a sed cras gravida curabitur urna cras consectetur cursus. Ultricies
        volutpat nostra mi pulvinar, pretium aliquet eleifend lectus. Nostra quam taciti pharetra sed lacinia maximus laoreet. Vestibulum tortor litora vulputate inceptos metus, habitant morbi
        sagittis. Elit luctus convallis parturient vivamus maecenas maecenas iaculis. Erat etiam cursus ut orci habitant cubilia in maecenas. Sagittis nisi lacinia viverra arcu phasellus faucibus dis.
        Justo natoque fringilla ad gravida bibendum magnis luctus lacinia. Curabitur egestas nisl natoque; molestie conubia suspendisse. Lacinia inceptos fringilla commodo, hendrerit quam dictum
        imperdiet. Elit auctor mauris magna eleifend natoque nascetur. Turpis mauris etiam aliquet tristique suspendisse tellus metus pharetra? Blandit ligula pharetra libero habitasse feugiat fusce
        blandit suspendisse. Molestie facilisi duis maximus gravida, ipsum fames turpis aliquet. Potenti sapien semper suscipit sem pharetra ad pellentesque. Facilisis dapibus vel platea sed justo
        habitasse. Suscipit justo leo ipsum viverra amet est elit. Maximus penatibus cubilia lacus ligula praesent, consectetur ex.
      </div>
    </>
  );
}

export default App;
