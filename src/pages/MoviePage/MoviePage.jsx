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
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZjRjYTBiMzU0NzNjYWRiZWQ4MDZjYmU2NGEzMDUzOSIsInN1YiI6IjY1MDgwODc3ZmEyN2Y0MDEwYzRiMjNmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dzslG0osfAjmJblAVS9ddKou3XQSdkBpmYyw6BXaZXo",
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
          placeholder="State"
          search
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
