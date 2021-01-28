import * as React from "react";
import "./dashboard.scss";
import Sidebar from "./sidebar";
import verify from "../../assets/images/verify.svg";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        {/* Topbar */}
        <div className="topbar">
          <div className="title">
            <span>Mano Super Market</span>
            <img src={verify} alt="Mano Super Market" />
          </div>
          <div className="info">
            <span>How to use</span>
          </div>
        </div>

        {/* Stats */}
        <div className="section-stats">Stats</div>

        {/* Orders */}
        <div className="section-orders">Orders</div>
      </div>
    </div>
  );
};

export default Dashboard;
