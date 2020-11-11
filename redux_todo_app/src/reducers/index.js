// Allows me to combine more reducers into one if needed
import { combineReducers } from "redux";

// Todo reducer
import todosReducer from "./todos";

const allReducers = combineReducers({
   todos: todosReducer
});

export default allReducers;
