import React, { useEffect, useState } from "react";
import "./home.css";
import banner1 from "../../assests/banner.png";
import banner2 from "../../assests/banner3.png";
import banner3 from "../../assests/banner4.png";
import banner4 from "../../assests/service.jpg";
import brand from "../../assests/brand.png";
import hero from "../../assests/hero.gif";

const images = [banner1, banner2, banner3, banner4];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="home-container">
      <img
        className="single-img"
        src={images[currentIndex]}
        alt="img"
        // alt={`Image ${currentIndex + 1}`}
      />
      <div className="brand-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="brand">
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
          <img src={brand} alt="brand" />
        </div>
      </div>
      <div className="we-are">
        <h1>Why We Are?</h1>
        <div className="we-are-parent">
          <img src={hero} alt="hero" />
          <p>
            <b>Softomatic Technology Services</b>
            is an dynamic and forward-thinking recruitment agency that brings
            together a team of highly skilled professionals. Our staff consists
            of experienced recruiters, industry specialists, and HR experts,
            each with an extensive network and a deep understanding of various
            sectors. We believe that our team's collective knowledge and
            expertise enable us to offer tailored solutions that meet the unique
            needs of each client.With a commitment to creating a winning
            workforce, we support individuals and businesses in achieving their
            aspirations within today's competitive landscape. Join us to
            experience streamlined hiring, seamless onboarding, and
            comprehensive HR solutions that drive success.
          </p>
        </div>
        <button>Get Known Us</button>
      </div>
    </div>
  );
};

export default Home;
