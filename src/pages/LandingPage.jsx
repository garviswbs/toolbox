// Ant Design
import { Row, Col, Carousel } from "antd";
import Card from "../Components/Card.jsx";

// CSS
import "./LandingPage.css";

function LandingPage({ landingPageTitle }) {
  const contentStyle = {
    margin: 0,
    // height: "calc(50vh - 95px)",
    color: "#693100 !important",
    lineHeight: "160px",
    textAlign: "center",
    background: "#fff6eb",
    // width: "100%",
    borderRadius: "10px",
  };

  return (
    <>
      <Col>
        <h3>Landing Page: {landingPageTitle} </h3>
      </Col>
      <Col>
        <Carousel arrows infinite={true} draggable={true} dots={{ color: "red !important" }} dotsClass="slick-dots" slidesToShow={6} slidesToScroll={6}>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="carousel_card">
                <div className="carousel_card_content">
                  <h4>Title Here</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <a href="#" className="website_link">
                    Website
                  </a>
                  <a href="#" className="sample_link">
                    Sample3
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Carousel>
      </Col>
    </>
  );
}

export default LandingPage;
