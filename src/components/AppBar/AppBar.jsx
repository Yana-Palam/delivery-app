import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import s from "./AppBar.module.css";
import Container from "../Container";
import {
  selectTotalPrice,
  selectTotalItemsCount,
} from "../../redux/cart/cartSelectors";

function AppBar() {
  const totalPrice = useSelector(selectTotalPrice);
  const totaLItemsCount = useSelector(selectTotalItemsCount);
  return (
    <>
      <Container>
        <ul className={s.list}>
          <li>
            <NavLink className={s.link} to="/">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink className={s.link} to="/cart">
              Shopping Cart {totaLItemsCount}|{totalPrice}$
            </NavLink>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default AppBar;
