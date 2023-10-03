import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Carousal.css";
import {
  FaChevronDown,
  FaChevronLeft,
  FaChevronRight,
  FaPlayCircle,
} from "react-icons/fa";
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { IoMdAdd } from "react-icons/io";
import GenerList from "../../GenerList";
import verifyToken from "../../verifyToken";
import Swal from "sweetalert2";

const Carousal = ({ category, page, dropVal }) => {
  const [movies, setMovies] = useState([]);
  const [slides, setSlides] = useState(0);
  const [videoKey, setVideoKey] = useState("");
  const [id, setId] = useState();
  const [newGener, setNewGener] = useState([]);
  const [user, setUser] = useState();

  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });

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
            setMovies(res.data.results);
          });
      } else if (category === "New Releases") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&primary_release_year=2023&sort_by=popularity.desc`,
            options
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      } else if (category === "Blockbuster Movies") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/top_rated`,
            options
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      } else if (category === "Popular On Netflix") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/search/movie?query=netflix&include_adult=false&page=1`,
            options
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      } else if (category === "Action Movies") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=true&language=en-US&page=1&sort_by=popularity.desc&with_genres=28`,
            options
          )
          .then((res) => {
            setMovies(res.data.results);
          });
      } else if (category === "Popular Tv Shows") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/popular?language=en-US&page=1`,
            options
          )
          .then((res) => {
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
              setMovies(res.data.results);
            });
        } else if (category === "Arriving Today") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Tv Shows") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
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
              setMovies(res.data.results);
            });
        } else if (category === "Arriving Today") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/airing_today?language=en-US&page=1`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/trending/tv/day?language=en-US`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/top_rated?language=en-US&page=1`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Tv Shows") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/on_the_air?language=en-US&page=2`,
              options
            )
            .then((res) => {
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
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Movies") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=2&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Now Playing") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=3&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=4&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=5&sort_by=popularity.desc&with_genres=${dropVal}`,
              options
            )
            .then((res) => {
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
              setMovies(res.data.results);
            });
        } else if (category === "upcomming Movies") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/upcoming?language=en-US&page=2`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Now Playing") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/now_playing?language=en-US&page=1`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Most Trending") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/trending/movie/week?language=en-US`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        } else if (category === "Top Rated") {
          axios
            .get(
              `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/top_rated?language=en-US&page=1`,
              options
            )
            .then((res) => {
              setMovies(res.data.results);
            });
        }
      }
    }
  }, [category, dropVal, page]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      verifyToken(token).then((res) => {
        if (res.message) {
          setUser(res.user);
        }
      });
    }
  }, []);

  const slideLeft = () => {
    if (slides < 0) {
      setSlides((prev) => prev + 1);
    }
  };

  const slideRight = () => {
    if (slides > -15) {
      setSlides((prev) => prev - 1);
    }
  };

  const handleMouse = async (idx, ele, categ) => {
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
      },
    };

    if (page === "home") {
      setId(`${ele.id}-${idx}`);
      if (categ !== "Popular Tv Shows") {
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/${ele.id}/videos?language=en-US`,
            options
          )
          .then((res) => {
            res.data?.results?.map((ele) => {
              setVideoKey(ele.key ? ele.key : "");
            });
          })
          .catch((err) => {
            console.log(err);
          });

        const gener = await GenerList(ele.genre_ids);
        setNewGener(gener);
      } else {
        setId("");
        axios
          .get(
            `${process.env.REACT_APP_MOVIE_BASE_URL}/3/tv/${ele.id}/videos?language=en-US`,
            options
          )
          .then((res) => {
            res.data?.results?.map((ele) => {
              setVideoKey(ele.key);
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } else if (page === "tv") {
      setId("");
    } else if (page === "movie") {
      setId(`${ele.id}-${idx}`);
      axios
        .get(
          `${process.env.REACT_APP_MOVIE_BASE_URL}/3/movie/${ele.id}/videos?language=en-US`,
          options
        )
        .then((res) => {
          res.data?.results?.map((ele) => {
            setVideoKey(ele.key ? ele.key : "");
          });
        })
        .catch((err) => {
          console.log(err);
        });
      const gener = await GenerList(ele.genre_ids);
      setNewGener(gener);
    }
  };

  const handleAddMovie = (ele) => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/api/mylist/add-movie`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user: user,
          movie_id: ele.id,
          backdrop_path: ele.backdrop_path,
          title: ele.original_title ? ele.original_title : ele.name,
        }),
      })
      .then((res) => {
        if (res.data.execution) {
          Toast.fire({ icon: "success", title: res.data.message });
        } else {
          Toast.fire({ icon: "warning", title: res.data.message });
        }
      })
      .catch((err) => {
        console.log(err);
        Toast.fire({ icon: "error", title: "something went wrong" });
      });
  };

  return (
    <div className="carousal">
      <div
        className="carousal-container"
        style={{ transform: `translateX(${slides * 226}px)` }}
      >
        {movies?.map((ele, idx) => {
          if (ele.backdrop_path) {
            return (
              <div
                className="cards"
                onMouseOver={() => {
                  handleMouse(idx, ele, category);
                }}
                onMouseLeave={() => {
                  setId("");
                }}
              >
                <img
                  src={`${process.env.REACT_APP_TMDB_IMAGE_URL}${ele.backdrop_path}`}
                  alt={ele.original_title}
                />
                {`${ele.id}-${idx}` === id ? (
                  <div className="card-video">
                    <div className="card-video-container">
                      <iframe
                        type="text/html"
                        style={{ backgroundColor: "#000", width: "100%" }}
                        src={`//www.youtube.com/embed/${videoKey}?autoplay=1&amp;origin=https%3A%2F%2Fwww.themoviedb.org&amp;hl=en&amp;modestbranding=1&amp;fs=1&amp;autohide=1`}
                        frameborder="0"
                        allowfullscreen="1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        title={ele.original_title}
                        width="100%"
                        height="100%"
                      />
                      <div className="video-info">
                        <div className="video-info-container">
                          <h3 className="video-title">
                            {!ele.original_title
                              ? ele.name
                              : ele.original_title}
                          </h3>
                          <div className="video-icons">
                            <div className="video-controls">
                              <FaPlayCircle />
                              <BiSolidLike />
                              <BiSolidDislike />
                              <IoMdAdd
                                onClick={() => {
                                  handleAddMovie(ele);
                                }}
                              />
                            </div>
                            <div className="video-info">
                              <FaChevronDown />
                            </div>
                          </div>
                          <ul className="video-geners">
                            {newGener.map((ele) => (
                              <li>{ele}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
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
