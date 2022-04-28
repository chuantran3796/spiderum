import React from "react";

import Header from "./../components/Header";
import Menu from "./../components/Menu";
import MenuMore from "./../components/MenuMore";
import Slider from "./../components/Slider";

const Home = () => {
  return (
    <div className="App">
      <Header />

      <Slider />
      <div className="position-menu">
        <Menu />
        <MenuMore />
      </div>
    </div>
  );
};
export default Home;
