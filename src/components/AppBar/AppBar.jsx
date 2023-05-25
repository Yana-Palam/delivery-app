import React from "react";
import { Link, NavLink } from "react-router-dom";
import s from "./AppBar.module.css";
import Container from "../Container";

function AppBar() {
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
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </Container>
    </>
  );
}

export default AppBar;
