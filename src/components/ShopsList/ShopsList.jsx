import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setValueFilter } from "../../redux/filter/filterSlice";
import s from "./ShopList.module.css";

function ShopsList() {
  const dispatch = useDispatch();

  const [shops, setShops] = useState([]);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        const { data } = await axios.get(
          "https://delivery-app-r6bz.onrender.com/api/shops"
        );

        setShops(data);
      } catch (e) {}
    };
    fetchShops();
  }, []);

  const onClickShop = (id) => {
    dispatch(setValueFilter(id));
  };
  return (
    <ul className={s.list}>
      {shops.map(({ _id, name }) => (
        <li className={s.item} key={_id}>
          <button
            onClick={() => {
              onClickShop(_id);
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
