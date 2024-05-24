import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faUser } from "@fortawesome/free-solid-svg-icons";
import { PoweroffOutlined } from "@ant-design/icons";

import "./Header.sass";
import Paths from "../../paths/paths";
import { useAuthContext } from "../context/AuthContext";

export default function Header() {
  const { user } = useAuthContext();
  return (
    <nav className="nav_bar" role="navigation">
      <Link to={Paths.Home}>
        <FontAwesomeIcon
          className="svg_icon"
          data-testid="svg-icon"
          icon={faPaw}
          style={{ color: "#ffffff" }}
        />
      </Link>
      {user !== null && <PoweroffOutlined />}
      {user === null && (
        <Link to={Paths.SignUp}>
          <FontAwesomeIcon
            className="svg_icon"
            data-testid="svg-icon"
            icon={faUser}
            style={{ color: "#ffffff" }}
          />
        </Link>
      )}

      <h2>Four Paws</h2>
      {/* <SidebarComponent /> */}
    </nav>
  );
}
