import { useNavigate } from "react-router-dom";
import { Button } from "antd";

import Paths from "../../paths/paths";
import "./Welcome.sass";

export default function Welcome() {
  const navigate = useNavigate();

  const onClickNavigate = () => {
    navigate(Paths.Welcome);
  };

  return (
    <section className="header">
      <div className="content">
        <div className="info">
          <h1>Four paws</h1>
          <p role="presentation">
            Where love and care meet quality pet supplies!
          </p>
        </div>
        <div className="button-container">
          <Button
            type="primary"
            size="large"
            className="button-start"
            block
            role="button"
            onClick={onClickNavigate}
          >
            Get started
          </Button>
        </div>
      </div>
      <img
        className="image_welcome"
        src="/images/homeImg.png"
        alt="Dog and Cat running"
      />
    </section>
  );
}
