import {applyMiddleware, createStore} from "redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);
export default createStore(reducer, middleware);
