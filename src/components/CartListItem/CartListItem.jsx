import React from "react";
import { useDispatch } from "react-redux";
import { plusItem, minusItem, removeItem } from "../../redux/cart/cartSlice";
import {
  AiFillPlusCircle,
  AiOutlineMinusCircle,
  AiOutlineCloseCircle,
} from "react-icons/ai";
import s from "./CartListItem.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function CartListItem({ id, title, count, price }) {
  const dispatch = useDispatch();

  const isBtnDisabled = count === 1;

  return (
    <Card
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginBottom: 20,
      }}
    >
      <CardMedia
        sx={{ height: 140, width: 280 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <div className={s.wrapper}>
        <h2>{title}</h2>
        <div className={s.count}>
          <button
            className={s.iconBtn}
            disabled={isBtnDisabled}
            onClick={() => {
              dispatch(minusItem(id));
            }}
            type="button"
          >
            <AiOutlineMinusCircle className={s.icon} />
          </button>
          <p>{count}</p>
          <button
            className={s.iconBtn}
            onClick={() => {
              dispatch(plusItem(id));
            }}
            type="button"
          >
            <AiFillPlusCircle className={s.icon} />
          </button>
        </div>
        <p>{price * count}$</p>
      </div>
      <button
        className={s.iconBtn}
        onClick={() => {
          dispatch(removeItem(id));
        }}
        type="button"
      >
        <AiOutlineCloseCircle className={s.icon} />
      </button>
    </Card>
  );
}

export default CartListItem;
