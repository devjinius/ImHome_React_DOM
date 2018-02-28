import { createStore, combineReducers, applyMiddleware } from "redux";
import users from "redux/modules/users";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createHistory from "history/createBrowserHistory";
import thunk from "redux-thunk";

const env = process.env.NODE_ENV;

const history = createHistory();

const middlewares = [thunk, routerMiddleware(history)];

if (env === "development") {
    const { logger } = require("redux-logger");    
    middlewares.push(logger);
}

//리듀서들을 합치는 공간
const reducer = combineReducers({
    users,
    routing: routerReducer,
})

let store = initialState => 
    createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));


export { history };

export default store();