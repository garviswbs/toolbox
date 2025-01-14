import { Col } from "antd";

function Card() {
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div className="card_parent">
        <div className="card_content">
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
  );
}

export default Card;
