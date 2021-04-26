import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { getMovie } from "../actions/MovieActions";
import Loading from "./Loading";

const Detail = (props) => {
  // console.log(props);
  const { id } = props.match.params;
  const singleMovie = useSelector((state) => state.SingleMovieState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovie(id));
    console.log("aha effect");
  }, []);

  return (
    <>
      {singleMovie.loading ? (
        <Loading />
      ) : (
        <>
          <div className="row mt-3 mb-5">
            <div className="col-md-12">
              <h2>Details</h2>
            </div>
          </div>

          <div className="row">
            {singleMovie.data.poster && (
              <div className="col-md-6 mb-5 ">
                <div className="card">
                  <img
                    src={singleMovie.data.poster}
                    className="card-img-top img-fluid detailImage"
                    alt=""
                  />
                </div>
              </div>
            )}

            <div
              className={
                " mb-5 " +
                (singleMovie.data.poster === "" ? "col-md-12" : "col-md-6")
              }
            >
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{singleMovie.data.title}</h5>
                  <p>{singleMovie.data.plot}</p>
                  <p>Rating: {singleMovie.data.rating || <b>Data yok</b>}</p>
                  <p>Length: {singleMovie.data.length || <b>Data yok</b>}</p>
                  <p>Year: {singleMovie.data.year || <b>Data yok</b>}</p>
                  <p>
                    Rating Votes:{" "}
                    {singleMovie.data.rating_votes || <b>Data yok</b>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-5">
            <div className="col-md-12">
              <h2>Casts</h2>
              <table class="table table-borderless">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Actor</th>
                    <th scope="col">Character</th>
                  </tr>
                </thead>
                <tbody>
                  {singleMovie.data.cast?.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item.actor}</td>
                      <td>{item.character}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      <div className="row mb-5">
        <div className="col-md-12">
          <button
            className="btn btn-primary"
            onClick={() => props.history.goBack()}
          >
            Geri Dön
          </button>
        </div>
      </div>
    </>
  );
};

export default Detail;
