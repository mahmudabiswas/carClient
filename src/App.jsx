import { useState } from "react";

import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer/Footer";
import NavBar from "./Components/Home/NavBar/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
