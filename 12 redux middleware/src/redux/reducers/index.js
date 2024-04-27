import { combineReducers } from "redux";
import authSlice from "./authSlice";
import productSlice from "./productSlice";


export default combineReducers({
    auth: authSlice,
    product: productSlice
});