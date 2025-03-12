import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Resort from "../../img/Resort.jpg";
import Ecommerce from "../../img/ecommerce.png";
import Burger from "../../img/burger.webp";
import { themeContext } from "../../Context";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://react-beach-resort-yup.netlify.com/">
            <img className="port-img" src={Resort} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://e-cart-3a39e.web.app">
            <img className="port-img" src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://burger-builder-applicati-418e8.web.app/">
            <img className="port-img" src={Burger} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
