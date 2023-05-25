import React from "react";
import s from "./FoodList.module.css";
import FoodBlock from "../FoodBlock/FoodBlock";

function FoodList() {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <FoodBlock />
        </li>
        <li>
          <FoodBlock />
        </li>
        <li>
          <FoodBlock />
        </li>
      </ul>
    </div>
  );
}

export default FoodList;
