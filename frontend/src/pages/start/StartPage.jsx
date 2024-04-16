import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Welcome from "../../components/welcome/Welcome";

import "./StartPage.sass";

export default function StartPage() {
  return (
    <>
      <div className="startPage">
        <Header />
      </div>
      <Welcome />
      <Footer />
    </>
  );
}
