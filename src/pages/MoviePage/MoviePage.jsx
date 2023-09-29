import React, { useEffect, useState } from "react";
import CarousalSection from "../../components/CarousalSection/CarousalSection";
import "./MoviePage.css";
import { Dropdown } from "semantic-ui-react";
import axios from "axios";

const MoviePage = () => {
  const [options, setOptions] = useState([]);
  const [dropVal, setDropVal] = useState("");
  const category = [
    "Most Popular",
    "upcomming Movies",
    "Now Playing",
    "Most Trending",
    "Top Rated",
  ];

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
      },
    };

    axios
      .get("https://api.themoviedb.org/3/genre/movie/list?language=en", options)
      .then((res) => {
        let option = [];
        res?.data?.genres?.map((ele) => {
          option.push({ text: ele.name, key: ele.id, value: ele.id });
        });
        setOptions(option);
      });
  }, []);

  const handleChange = (e, value) => {
    setDropVal(value.value);
  };
  return (
    <div className="movie-container">
      <div className="movie-dropdown">
        <Dropdown
          placeholder="Select Gener"
          selection
          options={options}
          style={{
            backgroundColor: "rgba(0,0,0,0.5)",
            outline: "1px solid var(--color-light)",
            color: "var(--color-light)",
          }}
          onChange={handleChange}
        />
      </div>

      <CarousalSection category={category} page={"movie"} dropVal={dropVal} />
    </div>
  );
};

export default MoviePage;
