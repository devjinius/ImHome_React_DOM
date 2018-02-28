import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "redux/modules/users";
import thunk from "redux-thunk";

const middlewares = [thunk];
const env = process.env.NODE_ENV;

if (env === "development") {
    const { logger } = require("redux-logger");    
}

//리듀서들을 합치는 공간
const reducer = combineReducers({
    users
})

let store = initialState => 
    createStore(reducer, applyMiddleware(...middlewares));

export default store();