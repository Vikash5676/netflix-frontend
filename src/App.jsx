import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import HomePage from "./pages/HomePage/HomePage";
import SignUp from "./pages/SignUp/SignUp";
import Protected from "./Protected";
import TvPage from "./pages/TvPage/TvPage";
import MoviePage from "./pages/MoviePage/MoviePage";
import MyList from "./pages/MyList/MyList";

// const reload = () => {
//   return window.location.reload();
// };

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Protected component={<HomePage />} />} />
      <Route path="/tv-show" element={<Protected component={<TvPage />} />} />
      <Route path="/movies" element={<Protected component={<MoviePage />} />} />
      <Route path="/my-list" element={<Protected component={<MyList />} />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<SignIn />}></Route>
    </Routes>
  );
};

export default App;
