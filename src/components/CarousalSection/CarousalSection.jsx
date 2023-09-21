import React from "react";
import "./CarousalSection.css";
import Carousal from "../Carousal/Carousal";

const CarousalSection = ({ category, page, dropVal }) => {
  return (
    <section className="hero2">
      {category.map((ele) => {
        return (
          <div className="hero2-container">
            <div className="hero2-title">{ele}</div>
            <Carousal category={ele} page={page} dropVal={dropVal} />
          </div>
        );
      })}
    </section>
  );
};

export default CarousalSection;
