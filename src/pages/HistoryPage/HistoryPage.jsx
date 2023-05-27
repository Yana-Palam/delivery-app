import React, { useState } from "react";
import HistoryForm from "../../components/HistoryForm/HistoryForm";
import HistoryList from "../../components/HistoryList/HistoryList";
import Container from "../../components/Container";
import s from "./HistoryPage.module.css";

function HistoryPage() {
  const [orders, setOrders] = useState([]);
  return (
    <div className={s.wrapper}>
      <Container>
        <HistoryForm setOrders={setOrders} />
        <HistoryList orders={orders} />
      </Container>
    </div>
  );
}

export default HistoryPage;
