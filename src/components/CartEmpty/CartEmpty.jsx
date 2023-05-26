import React from "react";
import Container from "../Container/Container";
import s from "./CartEmpty.module.css";

function CartEmpty() {
  return (
    <div className={s.wrapper}>
      <Container>
        <h2 className={s.title}>The cart is empty 😕</h2>
        <p className={s.text}>You probably haven't ordered products yet.</p>
        <p className={s.text}>To order products, go to the main page.</p>
      </Container>
    </div>
  );
}

export default CartEmpty;
