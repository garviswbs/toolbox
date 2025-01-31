import { Col } from "antd";

function Card({ item }) {
  return (
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>
      <div className="card_parent">
        <div className="card_content">
          <h4>{item.title}</h4>
          <p>{item.description}</p>
          <a href={item.websiteLink} target="_blank" className="website_link">
            Website
          </a>
          <a href={item.sampleLink} target="_blank" className="sample_link">
            Sample
          </a>
        </div>
      </div>
    </Col>
  );
}

export default Card;
