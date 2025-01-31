// Ant Design
import { Col } from "antd";
// Components
import Card from "../Components/Card.jsx";
// Data
import cardContent from "../data/card-content.json";

function CardLayout({ subPageQuery }) {
  // Query JSON Data and populate the Card Layout
  const filteredContent = cardContent.filter((item) => item.subPage === subPageQuery);
  console.log(filteredContent);

  return (
    <>
      {/* <Col span={24}>
        <h4>subPageQuery = {subPageQuery}</h4>
      </Col> */}
      {filteredContent.map((item) => (
        <Card key={item.title} item={item} />
      ))}
    </>
  );
}

export default CardLayout;
