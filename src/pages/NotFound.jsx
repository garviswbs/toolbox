// 404 Image
import FourOhFour from "../assets/404/404_Image.png";
// Css
import "./NotFound.css";

function NotFound() {
  return (
    <div className="not_found">
      <img src={FourOhFour} style={{ width: "300px" }} />
      <h1>404</h1>
      <h2>Nothing here, dawg...</h2>
    </div>
  );
}

export default NotFound;
