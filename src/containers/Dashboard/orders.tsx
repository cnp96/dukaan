import * as React from "react";
import { Link } from "react-router-dom";
import { formatNumber } from "../../utils";
import right from "../../assets/images/arrow_right.svg";

export interface IOrder {
  id: number;
  type?: "new";
  time: string;
  thumbnail: string;
  quantity: number;
  price: number;
  details: string;
}
export interface OrdersProps {
  stats: { pending: number; accepted: number; shipped: number };
  orders: IOrder[];
}

const Orders: React.FC<OrdersProps> = (props) => {
  return (
    <React.Fragment>
      <div className="header">
        <span>Active Orders</span>
        <Link className="view-all" to="#">
          View All
          <img src={right} alt="right" />
        </Link>
      </div>
      <div className="overview">
        <div className="label active">Pending ({props.stats.pending})</div>
        <div className="label">Accepted ({props.stats.accepted})</div>
        <div className="label">Shipped ({props.stats.shipped})</div>
      </div>

      <div className="details">
        {props.orders.map((order, i) => {
          return (
            <div key={i} className="card">
              <div className="left">
                <div className="id">
                  Order #{order.id}
                  {order.type && <div className="type">{order.type}</div>}
                </div>
                <div className="thumbnail">
                  <img src={order.thumbnail} alt={order.id.toString()} />
                  <div className="info">
                    <div className="quantity">
                      {formatNumber(order.quantity) + " item"}
                    </div>
                    <div className="price">₹{order.price}</div>
                  </div>
                </div>
              </div>

              <div className="right">
                <div className="time">{order.time}</div>
                <Link to={order.details}>
                  Details <img src={right} alt="arrow right" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};

export default Orders;
