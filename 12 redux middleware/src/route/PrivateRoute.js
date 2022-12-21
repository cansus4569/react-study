import React from 'react'
import ProductDetail from '../page/ProductDetail'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PrivateRoute = () => {
    // console.log("PrivateRoute", auth);
    const auth = useSelector((state) => state.auth.auth);
    return auth == true ? <ProductDetail /> : <Navigate to="/login" />;
}

export default PrivateRoute
