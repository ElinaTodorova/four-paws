import "./Home.sass";
import { Button } from "antd";

export default function Home() {
  return (
    <section className="header">
      <div className="content">
        <div className="info">
          <h1>Four paws</h1>
          <p role="presentation">
            Here, every story has a four-legged hero in search of a loving home,
            and every visitor has the power to change a life, one wagging tail
            at a time.
          </p>
        </div>
        <div className="button-container">
          <Button
            type="primary"
            size="large"
            className="button-start"
            block
            role="button"
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
