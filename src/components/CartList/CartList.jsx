import React from "react";
import { useSelector } from "react-redux";
import CartListItem from "../CartListItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import s from "./CartList.module.css";

function CartList() {
  const items = useSelector(selectCartItems);

  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {items.map(({ id, title, count, price, imgUrl }) => (
          <li key={id}>
            <CartListItem
              id={id}
              title={title}
              price={price}
              count={count}
              imgUrl={imgUrl}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CartList;
