// import { createStore, applyMiddleware } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';
// import thunk from "redux-thunk"
// import rootReducer from './reducers';
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authSlice";
import productSlice from "./reducers/productSlice";

// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const store = configureStore({
    reducer: {
        auth: authReducer,
        product: productSlice
    }
})

export default store;