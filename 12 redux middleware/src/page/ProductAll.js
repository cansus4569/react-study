import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap'
import { useSearchParams } from 'react-router-dom'
import { productAction } from '../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';

const ProductAll = () => {
    // const [productList, setProductList] = useState([]);
    const productList = useSelector((state) => state.product.productList);
    const [query, setQuery] = useSearchParams();
    const dispatch = useDispatch();
    const getProducts = () => {
        let searchQuery = query.get('q') || "";
        console.log("What Query?", searchQuery);
        // middleWare 사용
        dispatch(productAction.getProducts(searchQuery));
    }

    useEffect(() => {
        getProducts();
    }, [query])

    return (
        <div>
            <Container>
                <Row>
                    {productList.map((menu, index) => (
                        <Col md={3} sm={12} key={index}>
                            <ProductCard item={menu} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default ProductAll;