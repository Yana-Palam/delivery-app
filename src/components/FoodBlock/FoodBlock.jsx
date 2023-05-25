import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { selectCartItemById } from "../../redux/cart/cartSelectors";

function FoodBlock({ id, title, price }) {
  const dispatch = useDispatch();

  const findItem = useSelector(selectCartItemById(id));
  const addedCount = findItem ? findItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
    };
    dispatch(addItem(item));
  };
  return (
    <div>
      <h2>{title}</h2>
      <button onClick={onClickAdd} type="button">
        add to Cart {addedCount}
      </button>
    </div>
  );
}

export default FoodBlock;
