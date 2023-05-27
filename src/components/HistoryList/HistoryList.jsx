import React from "react";
import HistoryListItem from "../HistoryListItem/HistoryListItem";

function HistoryList({ orders }) {
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            <HistoryListItem
              orders={order.items}
              totalPrice={order.totalPrice}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryList;
