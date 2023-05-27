import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import { selectCartItemById } from "../../redux/cart/cartSelectors";
import s from "./FoodBlock.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function FoodBlock({ id, title, price, shopId, imgUrl }) {
  const dispatch = useDispatch();

  const findItem = useSelector(selectCartItemById(id));
  const addedCount = findItem ? findItem.count : 0;

  const onClickAdd = () => {
    const item = {
      id,
      title,
      price,
      shopId,
      imgUrl,
    };
    dispatch(addItem(item));
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 160 }} image={imgUrl} title="green iguana" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Price: {price}$
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          style={{ alignItems: "baseline" }}
          onClick={onClickAdd}
          size="small"
        >
          add to cart{" "}
          {addedCount === 0 ? (
            ""
          ) : (
            <span className={s.count}>{addedCount}</span>
          )}
        </Button>
      </CardActions>
    </Card>
  );
}

export default FoodBlock;
