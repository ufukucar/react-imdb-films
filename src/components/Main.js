import React, { useState } from "react";
import Movie from "./Movie";
import Search from "./Search";

import { useDispatch } from "react-redux";

import { getMovies } from "../actions/MovieActions";

const Main = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "") return alert("Please write a movie name");

    dispatch(getMovies(name));
  };
  return (
    <>
      <Search name={name} setName={setName} handleOnSubmit={handleOnSubmit} />
      <Movie />
    </>
  );
};

export default Main;
