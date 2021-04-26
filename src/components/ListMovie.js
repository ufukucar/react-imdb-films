import React from "react";

import { Link } from "react-router-dom";

const ListMovie = ({ movie }) => {
  return (
    <>
      {movie.data.map((item) => (
        <div className="col-md-4 mb-5 listMovieColDiv" key={item.id}>
          <div className="card">
            <img
              src={item.image}
              className="card-img-top img-fluid movieImage"
              alt={item.title}
            />
            <div className="card-body">
              <h5 className="card-title"> {item.title}</h5>
            </div>
            <div className="card-body">
              <Link
                to={`/movie/${item.id}`}
                params={{ item }}
                className="card-link"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ListMovie;
