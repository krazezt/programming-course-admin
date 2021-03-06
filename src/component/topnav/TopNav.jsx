import React from "react";
import { Dropdown } from "../dropdown/Dropdown";
import { Link, useHistory } from "react-router-dom";

import "./TopNav.css";

import user_image from "../../assets/images/tuat.png";
import user_menu from "../../assets/JsonData/user_menus.json";
import { ThemeMenu } from "../theme/ThemeMenu";

const renderNotificationItem = (item, index) => (
  <div className="notification-item" key={index}>
    <i className={item.icon}></i>
    <span>{item.content}</span>
  </div>
);

const renderUserToggle = (user) => (
  <div className="topnav_right-user">
    <div className="topnav_right-user_image">
      <img src={user.image} alt="" />
    </div>
    <div className="topnav_right-user_name">{user.display_name}</div>
  </div>
);

export const TopNav = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem("token-admin");
    window.location.reload();
  };
  const renderUserMenu = (item, index) => {
    return (
      <Link to="/" key={index}>
        <div
          className="notification-item"
          onClick={item.content === "Logout" ? logout : null}
        >
          <i className={item.icon}></i>
          <span>{item.content}</span>
        </div>
      </Link>
    );
  };
  return (
    <div className="topnav">
      <div />
      <div className="topnav_right">
        <div className="topnav_right-item">
          <Dropdown
            customToggle={() =>
              renderUserToggle({
                image: user_image,
                display_name: JSON.parse(localStorage.getItem("admin")).account,
              })
            }
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav_right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};
