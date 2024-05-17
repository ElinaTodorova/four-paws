import { Button } from "antd";

import "./Login.sass";

export default function Login() {
  return (
    <div className="login-side">
      <h2>Welcome back!</h2>
      <p>To keep connected with us please login with your personal info.</p>
      <Button className="btn-signIn">Sign In</Button>
    </div>
  );
}
