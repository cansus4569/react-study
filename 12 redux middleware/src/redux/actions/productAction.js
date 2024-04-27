import { productActions } from "../reducers/productReducer";

function getProducts(searchQuery) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/cansus4569/shopping-mall-study/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        // setProductList(data);
        console.log(data);
        // dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
        dispatch(productActions.getAllProduct({ data }));
    }
}

function getProductDetail(id) {
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/cansus4569/shopping-mall-study/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
        // setProduct(data);
        // dispatch({ type: "GET_DETAIL_SUCCESS", payload: { data } });
        dispatch(productActions.getSingleProduct({ data }));
    }
}

export const productAction = { getProducts, getProductDetail };