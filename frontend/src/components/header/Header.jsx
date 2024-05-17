import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";

import "./Header.sass";
import Paths from "../../paths/paths";

export default function Header() {
  return (
    <nav className="nav_bar" role="navigation">
      <Link to={Paths.Welcome}>
        <FontAwesomeIcon
          className="svg_icon"
          data-testid="svg-icon"
          icon={faPaw}
          style={{ color: "#ffffff" }}
        />
      </Link>
      <Link to={Paths.SignUp}>
        <FontAwesomeIcon
          className="svg_icon"
          data-testid="svg-icon"
          icon={faUser}
          style={{ color: "#ffffff" }}
        />
      </Link>
      <h2>Four Paws</h2>
      {/* <SidebarComponent /> */}
    </nav>
  );
}
