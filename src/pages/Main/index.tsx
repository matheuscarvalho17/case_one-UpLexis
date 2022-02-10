import "./style.scss";
import React from "react";
import AutoCarousel from "../../components/Carousel";
import NavigationBar from "../../components/NavigationBar";

interface IMainPage {}

const MainPage: React.FC<IMainPage> = () => {
  return (
    <div>
      <AutoCarousel />
      <NavigationBar />
    </div>
  );
};

export default MainPage;
