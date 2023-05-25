import React from "react";
import { useSelector } from "react-redux";
import CartListItem from "../CartListItem";
import { selectCartItems } from "../../redux/cart/cartSelectors";

function CartList() {
  const items = useSelector(selectCartItems);
  return (
    <>
      <ul>
        {items.map(({ id, title, count, price }) => (
          <li key={id}>
            <CartListItem id={id} title={title} price={price} count={count} />
          </li>
        ))}
        {/* <li key={1}>
          <CartListItem />
        </li>
        <li key={2}>
          <CartListItem />
        </li>
        <li key={3}>
          <CartListItem />
        </li> */}
      </ul>
    </>
  );
}

export default CartList;
