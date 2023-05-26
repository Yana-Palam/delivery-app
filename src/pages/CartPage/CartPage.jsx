import React from "react";
import { useSelector } from "react-redux";
import {
  selectTotalPrice,
  selectCartItems,
} from "../../redux/cart/cartSelectors";
import Cart from "../../components/Cart/Cart";
import CartEmpty from "../../components/CartEmpty/CartEmpty";

function CartPage() {
  const totalPrice = useSelector(selectTotalPrice);
  const items = useSelector(selectCartItems);
  const isCartEmpty = items.length === 0;
  console.log(isCartEmpty);

  return <>{isCartEmpty ? <CartEmpty /> : <Cart />}</>;
}

export default CartPage;
