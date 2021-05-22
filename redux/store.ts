import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import sessionLogsReducer from "./reducers";

const rootReducer = combineReducers({
  sessionLogsReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
