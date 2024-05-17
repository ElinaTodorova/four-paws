import SignUpForm from "../../components/signUpForm/SignUpForm";
import Login from "../../components/signUpForm/login/Login";

import "./SignUpPage.sass";

export default function SignUpPage() {
  return (
    <section className="page-section">
      <Login />
      <SignUpForm />
    </section>
  );
}
