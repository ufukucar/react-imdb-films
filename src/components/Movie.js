import React from "react";
import ListMovie from "./ListMovie";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const Movie = () => {
  const movie = useSelector((state) => state.MovieFetchState);

  //   console.log("movie: ", movie);

  return (
    <div className="row  mt-3 border-top pt-3">
      {movie.loading ? <Loading /> : <ListMovie movie={movie} />}
    </div>
  );
};

export default Movie;
