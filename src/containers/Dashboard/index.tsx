import * as React from "react";
import "./dashboard.scss";
import Sidebar from "./sidebar";
import verify from "../../assets/images/verify.svg";
import icecream from "../../assets/images/icecream.png";
import Stats from "./stats";
import Orders, { IOrder } from "./orders";

export interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = (props) => {
  const order: IOrder = {
    id: 281217,
    time: "Today, 11:11 PM",
    thumbnail: icecream,
    quantity: 1,
    price: 79,
    details: "#",
  };
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
        <div className="stats">
          <Stats
            link={"manosupermarket"}
            orders={192}
            totalSales={155920}
            storeViews={96}
            productViews={2313}
          />
        </div>

        {/* Orders */}
        <div className="orders">
          <Orders
            stats={{ accepted: 33, pending: 12, shipped: 121 }}
            orders={new Array(6)
              .fill(1)
              .map((_, i) => (i < 4 ? { ...order, type: "new" } : order))}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
