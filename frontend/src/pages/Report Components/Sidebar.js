import React from "react";
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRangeIcon from "@material-ui/icons/DateRange";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "reactstrap";
import "../../styles/sidebar.css";

const SidebarItem = ({ icon: Icon, text, tab, activeTab, onClick }) => (
  <li
    className={tab === activeTab ? "active" : ""}
    onClick={() => onClick(tab)}
  >
    {Icon && <Icon />}
    <p> {text} </p>
  </li>
);

const Avatar = ({ username, logout }) => {
  return (
    <div className="avatar-container">
      <AccountCircleIcon />
      <h6> {username} </h6>
      <div className="text-center">
        <Button color="success" outline onClick={logout}>
          Log Out
        </Button>
      </div>
    </div>
  );
};

function Sidebar(props) {
  const {
    activeTab,
    onTabClick,
    onCloseMenu,
    menuClass,
    logout,
    username
  } = props;

  return (
    <div className={"side_bar " + menuClass}>
      <div className="close-btn" onClick={onCloseMenu}>
        <CloseIcon />
      </div>
      <Avatar username={username} logout={logout} />
      <ul className="side_nav" id="nav_tab">
        <SidebarItem
          onClick={onTabClick}
          tab="account"
          text="Account Settings"
          activeTab={activeTab}
          icon={AccountCircleIcon}
        />
        <SidebarItem
          onClick={onTabClick}
          tab="dashboard"
          text="DASHBOARD"
          activeTab={activeTab}
          icon={DashboardIcon}
        />
        <SidebarItem
          onClick={onTabClick}
          tab="Year"
          text="Total By Year"
          activeTab={activeTab}
          icon={DateRangeIcon}
        />
        <SidebarItem
          onClick={onTabClick}
          tab="Month"
          text="Total By Month"
          activeTab={activeTab}
          icon={DateRangeIcon}
        />
        <SidebarItem
          onClick={onTabClick}
          tab="Week"
          text="Total By Week"
          activeTab={activeTab}
          icon={DateRangeIcon}
        />
        <SidebarItem
          onClick={onTabClick}
          tab="CE"
          text="Total By Date Range"
          activeTab={activeTab}
          icon={DateRangeIcon}
        />
      </ul>
    </div>
  );
}

export default Sidebar;
