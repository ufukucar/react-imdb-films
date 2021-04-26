import { combineReducers } from "redux";
import getMovieReducer from "./GetMovieReducer";
import movieSearchReducer from "./MovieSearchReduder";

const RootReducer = combineReducers({
  MovieFetchState: movieSearchReducer,
  SingleMovieState: getMovieReducer,
});

export default RootReducer;
