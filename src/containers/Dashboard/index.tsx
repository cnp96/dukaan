import * as React from "react";
import "./dashboard.scss";
import Sidebar from "./sidebar";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="content">
        <div className="topbar">Topbar</div>
        <div className="section-stats">Stats</div>
        <div className="section-orders">Orders</div>
      </div>
    </div>
  );
};

export default Dashboard;
