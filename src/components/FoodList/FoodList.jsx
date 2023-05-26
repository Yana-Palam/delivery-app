import React from "react";
import s from "./FoodList.module.css";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/filterSelectors";
import FoodBlock from "../FoodBlock/FoodBlock.jsx";
import foods from "../../db/foods.json";

function FoodList() {
  const filter = useSelector(selectFilter);
  const itemsToRender = foods.filter((item) => item.shopId === filter);

  return (
    <div>
      <ul className={s.list}>
        {itemsToRender.map(({ id, title, price, shopId }) => (
          <li key={id} className={s.item}>
            <FoodBlock shopId={shopId} id={id} title={title} price={price} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
