import React from "react";
import s from "./ShopPage.module.css";
import ShopsList from "../../components/ShopsList";
import FoodList from "../../components/FoodList";

function ShopPage() {
  return (
    <>
      <div className={s.parent}>
        <div className={s.div1}>
          <ShopsList />
        </div>
        <div className={s.div2}>
          <FoodList />
        </div>
      </div>
    </>
  );
}

export default ShopPage;
