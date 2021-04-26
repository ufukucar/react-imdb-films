const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const getMovieReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOVIE_SINGLE_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "MOVIE_SINGLE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "MOVIE_SINGLE_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default getMovieReducer;
