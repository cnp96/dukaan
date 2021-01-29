import * as React from "react";
import arrow from "../../assets/images/arrow_up.svg";

import whatsapp from "../../assets/images/whatsapp.svg";
import facebook from "../../assets/images/facebook.svg";
import twitter from "../../assets/images/twitter.svg";
import { formatNumber } from "../../utils";

export interface StatsProps {
  link: string;
  orders: number;
  totalSales: number;
  storeViews: number;
  productViews: number;
}

const Stats: React.FC<StatsProps> = (props) => {
  const stats = [
    {
      name: "orders",
      value: formatNumber(props.orders),
    },
    {
      name: "total sales",
      value: `₹${formatNumber(props.totalSales)}`,
    },
    {
      name: "store views",
      value: formatNumber(props.storeViews),
    },
    {
      name: "product views",
      value: formatNumber(props.productViews),
    },
  ];
  return (
    <React.Fragment>
      <div className="header">
        <span>Share store link</span>
        <div className="calendar">
          Last Month
          <img src={arrow} alt="arrow" />
        </div>
      </div>
      <div className="content">
        {/* Share */}
        <div className="share-card">
          <div className="meta">
            Your customers can visit your online store and place order from this
            link.
          </div>
          <a
            href={`https://mydukaan.io/${props.link}`}
            rel="noopener noreferrer"
            target="_blank"
            className="link"
          >{`mydukaan.io/${props.link}`}</a>
          <div className="share-via">
            Share via
            <div className="providers">
              <img src={whatsapp} alt="whatsapp" />
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          {stats.map((stat, ind) => {
            return (
              <div className="card" key={ind}>
                <span className="name">{stat.name}</span>
                <span className="value">{stat.value}</span>
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Stats;
