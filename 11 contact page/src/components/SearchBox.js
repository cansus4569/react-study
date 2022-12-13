import React, { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
    const [keyword, setKeyword] = useState('');
    const dispatch = useDispatch();
    // const { contact } = useSelector(state => state);

    const getSearch = (e) => {
        dispatch({type: "SEARCH", payload: {keyword}});
    }

    return (
        <Row>
            <Col lg={10}>
                <Form.Control type="text" placeholder="이름 입력해주세요." onChange={(e)=>setKeyword(e.target.value)}/>
            </Col>
            <Col lg={2}>
                <Button onClick={getSearch}>Search</Button>
            </Col>
        </Row>
    )
}

export default SearchBox
