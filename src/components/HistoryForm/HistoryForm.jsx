import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function HistoryForm({ setOrders }) {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email,
      phone,
    };
    const { data } = await axios.post(
      "https://delivery-app-r6bz.onrender.com/api/orders/history",
      userData
    );
    setOrders(data);
    console.log(data);
  };

  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 14,
          alignItems: "center",
        }}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
      >
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

        <Button onClick={onSubmit} type="submit" variant="contained">
          Submit
        </Button>
      </Box>
    </>
  );
}

export default HistoryForm;
