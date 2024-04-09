import { Carousel } from "antd";
import "./Carrousel.sass";

export default function Carrousel() {
  return (
    <div className="container_car">
      <Carousel className="carrousel" autoplay>
        <div className="container_img">
          <img src="/images/dogFood.png" alt="dog food" />
        </div>
        <div className="container_img">
          <img src="/images/catF.png" alt="dog food" />
        </div>
        <div className="container_img">
          <img src="/images/dogF.jpg" alt="dog food" />
        </div>
      </Carousel>
    </div>
  );
}
