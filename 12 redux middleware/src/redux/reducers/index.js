import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productSlice from "./productSlice";


export default combineReducers({
    auth: authReducer,
    product: productSlice
});