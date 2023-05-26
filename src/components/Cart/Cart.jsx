import React from "react";
import { useSelector } from "react-redux";

import CartForm from "../CartForm/CartForm";
import CartList from "../CartList/CartList";
import Container from "../Container/Container";
import { selectTotalPrice } from "../../redux/cart/cartSelectors";
import s from "./Cart.module.css";

function Cart() {
  const totalPrice = useSelector(selectTotalPrice);
  return (
    <div className={s.wrapper}>
      <Container>
        <div className={s.parent}>
          <div className={s.div1}>
            <CartForm />
          </div>
          <div className={s.div2}>
            <CartList />
          </div>
        </div>
        <p className={s.text}>Total price: {totalPrice}$</p>
      </Container>
    </div>
  );
}

export default Cart;
