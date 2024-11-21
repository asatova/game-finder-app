import { combineReducers } from "redux";
import gamesReducer from "./gamesReducer"; // Corrected the import

const rootReducer = combineReducers({
    games: gamesReducer, // Fixed the key-value pair
});

export default rootReducer;
