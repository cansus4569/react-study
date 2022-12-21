import React, { useState } from 'react'
import { Button, Form, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { authAction } from '../redux/actions/authAction';

const Login = ({ setAuth }) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loginUser = (e) => {
        e.preventDefault(); // 새로 고침 방지 (=render X)
        // setAuth(true);
        dispatch(authAction.login(id, password));
        console.log("login user function issue")
        navigate('/');
    }
    return (
        <Container className='login-area'>
            <Form className="login-form" onSubmit={(e) => loginUser(e)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e)=>setId(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
}

export default Login;

/*
<Container className='login-area'>
                <Row>
                    <Col md={12} lg={12} sm={12}>
                        <div className='mb-3'>Email address</div>
                    </Col>
                    <Col md={12} lg={12} sm={12}>
                        <div className='mb-3'>
                            
                        <input type="text" placeholder='Enter email' />
                        </div>
                    </Col>
                    <Col md={12} lg={12} sm={12}>
                        <div>Password</div>
                    </Col>
                    <Col md={12} lg={12} sm={12}>
                        <div>
                            <input type="password" placeholder='Password' />
                        </div>
                    </Col>
                    <Col md={12} lg={12} sm={12}>
                        <Button variant="danger">Login</Button>{' '}
                    </Col>
                </Row>
            </Container>

*/