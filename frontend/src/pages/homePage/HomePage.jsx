import Footer from "../../components/footer/Footer";
import Home from "../../components/home/Home";
import Header from "../../components/header/Header";
import SidebarComponent from "../../components/sidebarComponent/SidebarComponent";

import "./HomePage.sass";

export default function HomePage() {
  return (
    <>
      <Header className="mobile" />
      <SidebarComponent />
      <Home />
      <Footer classname="footer" />
    </>
  );
}
