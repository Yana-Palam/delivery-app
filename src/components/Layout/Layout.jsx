import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar";

function Layout() {
  return (
    <>
      <AppBar />
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
