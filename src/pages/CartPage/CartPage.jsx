import React from "react";
import { useSelector } from "react-redux";
import CartForm from "../../components/CartForm/CartForm";
import CartList from "../../components/CartList/CartList";
import { selectTotalPrice } from "../../redux/cart/cartSelectors";

function CartPage() {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div>
      <CartForm />
      <CartList />
      <p>Total price: {totalPrice}</p>
    </div>
  );
}

export default CartPage;
