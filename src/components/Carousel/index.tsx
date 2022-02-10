import "./style.scss";
import React from "react";
import banner1 from "../../imgs/banner1.png";
import banner2 from "../../imgs/banner2.png";
import banner3 from "../../imgs/banner3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IAutoCarousel {}

const AutoCarousel: React.FC<IAutoCarousel> = () => {
  return (
    <div className="c-flex__container--center">
      <Carousel autoPlay infiniteLoop interval={15000} showThumbs={false}>
        <div>
          <img src={banner1} alt="Benefícios" />
        </div>
        <div>
          <img src={banner2} alt="Processos" />
        </div>
        <div>
          <img src={banner3} alt="Adjetivos" />
        </div>
      </Carousel>
    </div>
  );
};

export default AutoCarousel;
