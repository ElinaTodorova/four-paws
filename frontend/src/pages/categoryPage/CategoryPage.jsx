import Category from "../../components/category/Category";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Products from "../../components/products/Products";
import SidebarComponent from "../../components/sidebarComponent/SidebarComponent";

export default function CategoryPage() {
  return (
    <>
      <Header />
      <SidebarComponent />
      <Products />
      <Category />
      <Footer />
    </>
  );
}
