import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ContactItem = ({item}) => {
    return (
        <Row>
            <Col lg={2}>

            </Col>
            <Col lg={10}>
                <div>
                    {item.name}
                </div>
                <div>
                    {item.phone}
                </div>
            </Col>
        </Row>
    )
}

export default ContactItem
