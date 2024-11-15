import { useState } from "react";
import "./App.css";

// Ant Design
import { Col, Row } from 'antd';


// AntDesign
import { Button } from "antd";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Row style={{backgroundColor:"red"}}>
      <Col span={24}>
    
      </Col>
    </Row>
    {/* <div className="card">
        <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>

      </div> */}
    
    </>
  );
}

export default App;
