import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.sass";
import SidebarComponent from "../sidebarComponent/SidebarComponent";

export default function Header() {
  return (
    <nav className="nav_bar" role="navigation">
      <FontAwesomeIcon
        className="svg_icon"
        data-testid="svg-icon"
        icon={faPaw}
        style={{ color: "#ffffff" }}
      />
      <FontAwesomeIcon
        className="svg_icon"
        data-testid="svg-icon"
        icon={faUser}
        style={{ color: "#ffffff" }}
      />
      <h2>Four Paws</h2>
      <SidebarComponent />
    </nav>
  );
}
