import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import Protected from "./Protected";
import TvPage from "./pages/TvPage/TvPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MyList from "./pages/MyList/MyList";

const App = () => {
  const [searched, setSearched] = useState("");
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Protected component={<HomePage />} setSearched={setSearched} />
        }
      />
      <Route
        path="/tv-show"
        element={<Protected component={<TvPage />} setSearched={setSearched} />}
      />
      <Route
        path="/movies"
        element={
          <Protected component={<MoviePage />} setSearched={setSearched} />
        }
      />
      <Route
        path="/my-list"
        element={<Protected component={<MyList />} setSearched={setSearched} />}
      />
      <Route
        path="/my-list"
        element={
          <Protected
            component={<MyList searched={searched} />}
            setSearched={setSearched}
          />
        }
      />

      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />}></Route>
    </Routes>
  );
};

export default App;
