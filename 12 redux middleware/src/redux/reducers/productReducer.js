import { createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    productDetail: null
}

// 예전 방식
// function productReducer(state = initialState, action) {
//     let { type, payload } = action;

//     switch (type) {
//         case "GET_PRODUCT_SUCCESS":
//             return { ...state, productList: payload.data };
//         case "GET_DETAIL_SUCCESS":
//             return { ...state, productDetail: payload.data };
//         default:
//             return { ...state };
//     }
// }

// export default productReducer;

// createSlice를 사용한 방식

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        getAllProduct(state, action) {
            state.productList = action.payload.data;
        },
        getSingleProduct(state, action) {
            state.productDetail = action.payload.data;
        }
    }
});
export const productActions = productSlice.actions;
export default productSlice.reducer;