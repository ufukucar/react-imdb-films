import axios from "axios";

export const getMovies = (movieName) => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIE_LIST_LOADING",
    });

    console.log(`x rapid api key: ${process.env.REACT_APP_RAPID_API_KEY}`);

    const response = await axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/${movieName}`,
        {
          headers: {
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
            "x-rapidapi-host":
              "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "MOVIE_LIST_SUCCESS",
          payload: res.data.titles,
        });
      })
      .catch((err) => {
        dispatch({
          type: "MOVIE_LIST_ERROR",
          payload: err,
        });
        console.log("actions error: ", err);
      });
  } catch (error) {
    dispatch({
      type: "MOVIE_LIST_ERROR",
      payload: error,
    });
  }
};

export const getMovie = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "MOVIE_SINGLE_LOADING",
    });

    ///console.log("try ici movie actions js");

    const response = await axios
      .get(
        `https://imdb-internet-movie-database-unofficial.p.rapidapi.com/film/${id}`,
        {
          headers: {
            "x-rapidapi-key": `${process.env.REACT_APP_RAPID_API_KEY}`,
            "x-rapidapi-host":
              "imdb-internet-movie-database-unofficial.p.rapidapi.com",
          },
        }
      )
      .then((res) => {
        dispatch({
          type: "MOVIE_SINGLE_SUCCESS",
          payload: res.data,
        });
        console.log(res.data);
      })
      .catch((err) => {
        dispatch({
          type: "MOVIE_SINGLE_ERROR",
          payload: err,
        });
        console.log("actions error: ", err);
      });
  } catch (error) {
    dispatch({
      type: "MOVIE_SINGLE_ERROR",
      payload: error,
    });
  }
};
