import React from "react";
import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import s from "./AppBar.module.css";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Container from "../Container";
import {
  selectTotalPrice,
  selectTotalItemsCount,
} from "../../redux/cart/cartSelectors";

function AppBar() {
  const totalPrice = useSelector(selectTotalPrice);
  const totaLItemsCount = useSelector(selectTotalItemsCount);
  return (
    <div className={s.appBar}>
      <Container>
        <ul className={s.list}>
          <li className={s.item}>
            <NavLink className={s.link} to="/">
              <p>Shop</p>
            </NavLink>
          </li>
          <li className={s.item}>
            <NavLink className={s.link} to="/cart">
              <p>Cart</p>{" "}
              <div className={s.wrapper}>
                <div className={s.iconWrapper}>
                  <AiOutlineShoppingCart />
                  {totaLItemsCount}
                </div>{" "}
                | {totalPrice}$
              </div>
            </NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default AppBar;
