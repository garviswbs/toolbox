// Ant Design
import { Col } from "antd";
// Components
import Card from "../Components/Card.jsx";
// Data
import cardContent from "../data/card-content.json";
import Item from "antd/es/list/Item.js";

function CardLayout({ subPageQuery }) {
  // Query JSON Data and populate the Card Layout
  const filteredContent = cardContent.filter((item) => item.subPage === subPageQuery);
  console.log(filteredContent);

  return (
    <>
      <Col span={24}>
        <h1>subPageQuery = {subPageQuery}</h1>
      </Col>
      {filteredContent.map((item) => (
        <Card key={item.title} item={item} />

        // <div key={item.title}>
        //   <h2>{item.title}</h2>
        //   <p>{item.description}</p>
        //   <a href={item.websiteLink}>Website</a>
        //   <a href={item.sampleLink}>Sample</a>
        // </div>
      ))}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}
    </>
  );
}

export default CardLayout;
