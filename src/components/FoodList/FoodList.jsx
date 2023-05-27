import React, { useEffect, useState } from "react";
import s from "./FoodList.module.css";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/filter/filterSelectors";
import FoodBlock from "../FoodBlock/FoodBlock.jsx";

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const { data } = await axios.get(
          "https://delivery-app-r6bz.onrender.com/api/foods"
        );

        setFoods(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchFoods();
  }, []);

  const filter = useSelector(selectFilter);
  const itemsToRender = foods.filter((item) => item.shopId === filter);

  return (
    <div>
      <ul className={s.list}>
        {itemsToRender.map(({ _id, title, price, shopId, imgUrl }) => (
          <li key={_id} className={s.item}>
            <FoodBlock
              shopId={shopId}
              id={_id}
              title={title}
              price={price}
              imgUrl={imgUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FoodList;
