import { combineReducers } from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import pokemon from "./pokemon";

export default combineReducers({ todos, visibilityFilter, pokemon });
