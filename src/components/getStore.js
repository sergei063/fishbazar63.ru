import {applyMiddleware, createStore} from "redux";

import {routerMiddleware} from "react-router-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import allReducers from "../reducers";
import history from "./history";
import thunk from "redux-thunk";


const middleware = routerMiddleware(history);


const store = createStore(allReducers, composeWithDevTools(applyMiddleware(middleware,thunk)));
//const store = createStore(allReducers, applyMiddleware(middleware));
store.subscribe(()=>{
    //console.log('subscribe',store.getState())
});
export default store;