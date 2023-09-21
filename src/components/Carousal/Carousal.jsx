import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carousal.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousal = ({ category, page, dropVal }) => {
  const [movies, setMovies] = useState([]);
  const [slides, setSlides] = useState(0);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
      },
    };
    if (page === "home") {
      if (category === "Trending Now") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/trending/all/day`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      } else if (category === "New Releases") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      } else if (category === "Blockbuster Movies") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/top_rated`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      } else if (category === "Popular On Netflix") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/search/movie?query=netflix&include_adult=false&page=1`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      } else if (category === "Action Movies") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      } else if (category === "Popular Tv Shows") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/popular?language=en-US&page=1`,
            options
          )
          .then((res) => {
            console.log(res.data);
            setMovies(res.data.results);
          });
      }
    } else if (page === "tv") {
      if (dropVal !== "") {
        if (category === "Most Popular") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Arriving Today") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Tv Shows") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        }
      } else {
        if (category === "Most Popular") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/popular?language=en-US&page=3`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Arriving Today") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/airing_today?language=en-US&page=1`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/trending/tv/day?language=en-US`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/top_rated?language=en-US&page=1`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Tv Shows") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/on_the_air?language=en-US&page=2`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        }
      }
    }
    if (page === "movie") {
      if (dropVal !== "") {
        if (category === "Most Popular") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Movies") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Now Playing") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        }
      } else {
        if (category === "Most Popular") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/popular?language=en-US&page=3`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Movies") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/upcoming?language=en-US&page=2`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Now Playing") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/trending/movie/week?language=en-US`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
              options
            )
            .then((res) => {
              console.log(res.data);
              setMovies(res.data.results);
            });
        }
      }
    }
  }, [category, dropVal, page]);

  const slideLeft = () => {
    if (slides < 0) {
      setSlides((prev) => prev + 1);
    }
  };

  const slideRight = () => {
    if (slides > -16) {
      setSlides((prev) => prev - 1);
    }
  };

  return (
    <div className="carousal">
      <div
        className="carousal-container"
        style={{ transform: `translateX(${slides * 281}px)` }}
      >
        {movies?.map((ele) => {
          if (ele.poster_path) {
            return (
              <div className="cards">
                <img
                  src={`${process.env.REACT_APP_TMDB_IMAGE_URL}${ele.poster_path}`}
                  alt={ele.original_title}
                />
              </div>
            );
          }
        })}
      </div>
      <div className="left-arrow">
        <FaChevronLeft onClick={slideLeft} />
      </div>
      <div className="right-arrow">
        <FaChevronRight onClick={slideRight} />
      </div>
    </div>
  );
};

export default Carousal;
