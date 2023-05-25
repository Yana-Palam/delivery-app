import React from "react";
import s from "./FoodList.module.css";
import FoodBlock from "../FoodBlock/FoodBlock";

function FoodList() {
  return (
    <div>
      <ul className={s.list}>
        <li>
          <FoodBlock id="1" title="Big1 Burger" price={120} />
        </li>
        <li>
          <FoodBlock id="2" title="Big2 Burger" price={120} />
        </li>
        <li>
          <FoodBlock id="3" title="Big3 Burger" price={120} />
        </li>
      </ul>
    </div>
  );
}

export default FoodList;
