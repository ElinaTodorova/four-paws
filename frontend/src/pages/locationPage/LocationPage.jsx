import Location from "../../components/location/Location";
import Header from "../../components/header/Header";
import SidebarComponent from "../../components/sidebarComponent/SidebarComponent";

export default function LocationPage() {
  return (
    <>
      <Header className="mobile" />
      <SidebarComponent />
      <Location />
    </>
  );
}
