import React, { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaw,
  faUser,
  faCartShopping,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import "./SidebarComponent.sass"; // Import du fichier CSS pour styliser la barre latérale

export default function SidebarComponent() {
  const [collapsed, setCollapsed] = useState(true);

  const handleMauseCollapsed = () => {
    setCollapsed(!collapsed);
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
            <FontAwesomeIcon icon={faPaw} className="icon" /> Documentation
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faUser} className="icon" /> Calendar
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faCartShopping} className="icon" />
            E-commerce
          </MenuItem>
          <MenuItem className="item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" /> Examples
          </MenuItem>
        </Menu>
      </Sidebar>
    </div>
  );
}
