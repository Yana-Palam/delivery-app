import React from "react";
import s from "./ShopList.module.css";
import shops from "../../db/shops.json";

function ShopsList() {
  return (
    <ul className={s.list}>
      {shops.map((item, index) => (
        <li key={index}>{item.name}</li>
      ))}
    </ul>
  );
}

export default ShopsList;
