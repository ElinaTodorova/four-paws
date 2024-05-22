import SignUpForm from "../../components/signUpForm/SignUpForm";
import Login from "../../components/signUpForm/login/Login";
import Paths from "../../paths/paths";

import "./SignUpPage.sass";

const props = {
  title: "Welcome back!",
  p: "To keep connected with us please login with your personal info.",
  btnTitle: "Sign In",
  link: Paths.Login,
};
export default function SignUpPage() {
  return (
    <section className="page-section">
      <Login props={props} />
      <SignUpForm />
    </section>
  );
}
