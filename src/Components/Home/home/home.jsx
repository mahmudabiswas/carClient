import React from "react";
import NavBar from "../NavBar/NavBar";
import Banner from "../banner/Banner";
import About from "../../Pages/About/About";
import Services from "../../Pages/Services/Services";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
    </div>
  );
};

export default Home;
