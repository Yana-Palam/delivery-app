import React, { useState } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {
  selectCartItems,
  selectTotalPrice,
} from "../../redux/cart/cartSelectors";
import s from "./CartForm.module.css";
import { clearItems } from "../../redux/cart/cartSlice";

function CartForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const onSubmit = async (e) => {
    e.preventDefault();
    const newOrder = {
      name,
      email,
      phone,
      address,
      items: cartItems,
      totalPrice,
    };
    try {
      await axios.post(
        "https://delivery-app-r6bz.onrender.com/api/orders",
        newOrder
      );
      toast.success("The order has been successfully placed!");
      setName("");
      setAddress("");
      setEmail("");
      setPhone("");
      dispatch(clearItems());
      navigate("/");
    } catch (error) {}
  };
  return (
    <>
      <Box
        className={s.form}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          required
          label="Name"
          variant="standard"
          margin="normal"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="filled-basic"
          required
          label="Email"
          variant="standard"
          margin="normal"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          required
          label="Phone"
          variant="standard"
          margin="normal"
          value={phone}
          onChange={(event) => {
            setPhone(event.target.value);
          }}
        />
        <TextField
          style={{ marginBottom: 38 }}
          id="standard-basic"
          required
          label="Address"
          variant="standard"
          margin="normal"
          value={address}
          onChange={(event) => {
            setAddress(event.target.value);
          }}
        />
      </Box>
      <Button
        className={s.btn}
        onClick={onSubmit}
        type="submit"
        variant="contained"
        style={{ marginTop: 50, float: "left", minWidth: 180 }}
      >
        Submit
      </Button>
    </>
  );
}

export default CartForm;
