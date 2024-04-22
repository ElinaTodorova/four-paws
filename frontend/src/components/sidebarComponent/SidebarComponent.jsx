import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faUser,
  faLocationDot,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";

import Paths from "../../paths/paths";
import "./SidebarComponent.sass";

export default function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(true);

  const handleMauseCollapsed = () => {
    setCollapsed((state) => !state);
  };

  return (
    <div
      className="sidebar"
      onMouseEnter={handleMauseCollapsed}
      onMouseLeave={handleMauseCollapsed}
    >
      <Sidebar collapsed={collapsed}>
        <Menu>
          <MenuItem className="item">
            <Link to={Paths.Welcome}>
              <FontAwesomeIcon icon={faPaw} className="icon" /> Home
            </Link>
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faUser} className="icon" /> Profil
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faRecycle} className="icon" /> Second Hand
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            Our shop
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
