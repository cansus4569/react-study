import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

let initialState = {
    productList: [],
    productDetail: null,
    isLoading: false,
    error: null
}

export const fetchProducts = createAsyncThunk('product/fetchAll', async (searchQuery, thunkApi) => {
    try {
        let url = `https://my-json-server.typicode.com/cansus4569/shopping-mall-study/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
    } catch (error) {
        thunkApi.rejectWithValue(error.message);
    }
});
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
    reducers: { // 비동기 작업을 처리하는 함수는 여기에 작성하지 않는다.
        getSingleProduct(state, action) {
            state.productDetail = action.payload.data;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productList = action.payload;
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});
export const productActions = productSlice.actions;
export default productSlice.reducer;