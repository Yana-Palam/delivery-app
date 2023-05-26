import React, { useState } from "react";
import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import s from "./CartForm.module.css";

function CartForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const cartItems = useSelector(selectCartItems);

  const onSubmit = (e) => {
    e.preventDefault();
    const newOrder = {
      name,
      email,
      phone,
      address,
      order: cartItems,
    };
    console.log(newOrder);
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
