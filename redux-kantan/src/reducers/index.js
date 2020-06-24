import hobbyReducer  from "./hobby";
import userReducer  from "./user";
import { combineReducers } from "redux";

//Manage all reducers of App

// Combine Reducer 
// Each State refer to State'Reducer


const rootReducer = combineReducers({
  hobby: hobbyReducer,
  user: userReducer,
});

export default rootReducer;
