import React from "react";
import s from "./HistoryListItem.module.css";
import Card from "@mui/material/Card";

import CardMedia from "@mui/material/CardMedia";

function HistoryListItem({ orders, totalPrice }) {
  console.log("HistoryListItem", orders, totalPrice);
  return (
    <div className={s.itemWrapper}>
      <ul className={s.list}>
        {orders.map(({ id, imgUrl, title, price, count }) => (
          <li key={id}>
            <Card
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,

                width: 280,
              }}
            >
              <CardMedia sx={{ height: 120, width: 140 }} image={imgUrl} />
              <div className={s.wrapper}>
                <h2 className={s.title}>{title}</h2>

                <p>{price * count}$</p>
              </div>
            </Card>
          </li>
        ))}
      </ul>
      <p className={s.text}>Total price: {totalPrice}$</p>
    </div>
  );
}

export default HistoryListItem;
