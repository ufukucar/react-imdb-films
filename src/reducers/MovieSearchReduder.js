const INITIAL_STATE = {
  loading: false,
  data: [],
  error: "",
};

const movieSearchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "MOVIE_LIST_LOADING":
      return {
        ...state,
        loading: true,
      };

    case "MOVIE_LIST_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case "MOVIE_LIST_ERROR":
      return {
        ...state,
        loading: false,
        error: "",
      };

    default:
      return state;
  }
};

export default movieSearchReducer;
