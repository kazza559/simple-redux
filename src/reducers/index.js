import { combineReducers } from "redux";
import getPostReducer from "./getPostReducer";
import getUserReducer from "./getUserReducer";

export default combineReducers({
  posts: getPostReducer,
  users: getUserReducer
});
