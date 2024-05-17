import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SidebarComponent from "../../components/sidebarComponent/SidebarComponent";
import SignUpForm from "../../components/signUpForm/SignUpForm";

export default function SignUpPage() {
  return (
    <>
      <Header className="mobile" />
      <SidebarComponent />
      <SignUpForm />
      <Footer classname="footer" />
    </>
  );
}
