import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState(0);
    const dispatch = useDispatch();

    const addContact = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_CONTACT', payload: {name, phone}})
    }

    return (
        <Form onSubmit={addContact}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>이름</Form.Label>
                <Form.Control type="text" placeholder="이름 입력해주세요." onChange={(e) => setName(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContact">
                <Form.Label>연락처</Form.Label>
                <Form.Control type="number" placeholder="전화번호 입력해주세요." onChange={(e) => setPhone(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
                Create
            </Button>
        </Form>
    )
}

export default ContactForm;
