import "./Home.sass";
import { Button } from "antd";

export default function Home() {
  return (
    <section className="header">
      <div>
        <h1>Four paws</h1>
        <p>Where love and care meet quality pet supplies!</p>
      </div>
      <img src="/images/homeImg.png" alt="Dog and Cat running" />
      <div className="button-container">
        <Button type="primary" size="large" className="button-start" block>
          Get started
        </Button>
      </div>
    </section>
  );
}
