import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.sass";

export default function Header() {
  return (
    <nav className="nav_bar" role="navigation">
      <FontAwesomeIcon
        className="svg_icon"
        icon={faPaw}
        style={{ color: "#ffffff" }}
      />
      <FontAwesomeIcon
        className="svg_icon"
        icon={faUser}
        style={{ color: "#ffffff" }}
      />
    </nav>
  );
}
