import LoginForm from "../../components/login-form/LoginForm";
import Login from "../../components/signUpForm/login/Login";
import Paths from "../../paths/paths";

import "../signUpPage/SignUpPage.sass";

const props = {
  title: "Don't have an account yet?",
  p: "Sign up now to get exclusive content, special offers, and connect with other pet lovers.",
  btnTitle: "Sign Up",
  link: Paths.SignUp,
};

export default function LoginPage() {
  return (
    <section className="page-section">
      <Login props={props} />
      <LoginForm />
    </section>
  );
}
