import React, { useEffect } from "react";
import "./HomePage.css";
import title from "../../assets/homeTitle.jpg";
import banner from "../../assets/homeBanner.jpg";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { BsPlayFill } from "react-icons/bs";
import CarousalSection from "../../components/CarousalSection/CarousalSection";

const HomePage = () => {
  const category = [
    "Trending Now",
    "New Releases",
    "Blockbuster Movies",
    "Popular On Netflix",
    "Action Movies",
    "Popular Tv Shows",
  ];
  useEffect(() => {}, []);

  return (
    <div className="hero-container">
      <section className="hero1">
        <img src={banner} alt="" />
      </section>

      <div className="hero-dark">
        <img src={title} alt={title} />
        <div className="hero-btn">
          <button className="play">
            <BsPlayFill className="hero-icon" />
            <span>Play</span>
          </button>
          <button className="more-info">
            <AiOutlineInfoCircle className="hero-icon" />
            <span>More Info</span>
          </button>
        </div>
      </div>
      <CarousalSection category={category} page={"home"} />
    </div>
  );
};

export default HomePage;
