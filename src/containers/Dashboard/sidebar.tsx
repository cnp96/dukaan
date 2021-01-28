import * as React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo_white.svg";
import account from "../../assets/images/navbar_account.svg";
import products from "../../assets/images/navbar_catalogue.svg";
import home from "../../assets/images/navbar_home.svg";
import marketing from "../../assets/images/navbar_marketing.svg";
import orders from "../../assets/images/navbar_orders.svg";
import "./sidebar.scss";

export interface SidebarProps {}
const Sidebar: React.FC<SidebarProps> = (props) => {
  const items = [
    { name: "Home", icon: home, link: "/" },
    { name: "Orders", icon: orders, link: "/orders", notification: 2 },
    { name: "Products", icon: products, link: "/products" },
    { name: "Marketing", icon: marketing, link: "/marketing" },
    { name: "Account", icon: account, link: "/account" },
  ];

  return (
    <div className="sidebar">
      <div className="logo">
        <img src={logo} alt="Dukaan" />
      </div>
      <div className="list-items">
        {items.map((item, key) => {
          return (
            <NavLink key={key} className="item" to={item.link}>
              <img src={item.icon} alt={item.name} />
              <span className="label">{item.name}</span>
              {item.notification && (
                <span className="notification">{item.notification}</span>
              )}
            </NavLink>
          );
        })}
      </div>
      <div className="contact">
        <span className="meta">Need any help?</span>
        <span className="chat">Chat with us</span>
      </div>
    </div>
  );
};

export default Sidebar;
