import React, { useEffect, useState } from "react";
import "./home.css";
import banner1 from "../../assests/banner.png";
import banner2 from "../../assests/banner3.png";
import banner3 from "../../assests/banner4.png";
import banner4 from "../../assests/service.jpg";

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
        alt={`Image ${currentIndex + 1}`}
      />
    </div>
  );
};

export default Home;
