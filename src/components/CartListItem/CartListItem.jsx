import React from "react";
import { useDispatch } from "react-redux";
import { plusItem, minusItem, removeItem } from "../../redux/cart/cartSlice";

function CartListItem({ id, title, count, price }) {
  const dispatch = useDispatch();

  const isBtnDisabled = count === 1;

  return (
    <div>
      <h2>{title}</h2>
      <button
        disabled={isBtnDisabled}
        onClick={() => {
          dispatch(minusItem(id));
        }}
        type="button"
      >
        -
      </button>
      <p>{count}</p>
      <button
        onClick={() => {
          dispatch(plusItem(id));
        }}
        type="button"
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(removeItem(id));
        }}
        type="button"
      >
        X
      </button>
    </div>
  );
}

export default CartListItem;
