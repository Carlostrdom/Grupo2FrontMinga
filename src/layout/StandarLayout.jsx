import React from "react";
import "../App.css";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/footer/Footer";

function StandarLayout() {
  return (
    <>
      <NavBar />
      <main>
        <Outlet></Outlet>
      </main>

     <Footer></Footer> 

    </>
  );
}
export default StandarLayout;