import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faRecycle,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import "./Footer.sass";

export default function Footer() {
  return (
    <footer className="footer" role="list">
      <FontAwesomeIcon
        className="icon"
        icon={faList}
        style={{ color: "#ffffff" }}
        data-testid="svg-icon"
      />
      <FontAwesomeIcon
        className="icon"
        icon={faRecycle}
        style={{ color: "#ffffff" }}
        data-testid="svg-icon"
      />
      <FontAwesomeIcon
        className="icon"
        icon={faCartShopping}
        style={{ color: "#ffffff" }}
        data-testid="svg-icon"
      />
      <FontAwesomeIcon
        className="icon"
        icon={faLocationDot}
        style={{ color: "#ffffff" }}
        data-testid="svg-icon"
      />
    </footer>
  );
}
