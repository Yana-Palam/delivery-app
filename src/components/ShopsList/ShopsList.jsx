import React from "react";
import { useDispatch } from "react-redux";
import { setValueFilter } from "../../redux/filter/filterSlice";
import s from "./ShopList.module.css";
import shops from "../../db/shops.json";

function ShopsList() {
  const dispatch = useDispatch();

  const onClickShop = (id) => {
    dispatch(setValueFilter(id));
  };
  return (
    <ul className={s.list}>
      {shops.map(({ id, name }) => (
        <li className={s.item} key={id}>
          <button
            onClick={() => {
              onClickShop(id);
            }}
            className={s.button}
            type="button"
          >
            {name}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShopsList;
