import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const rootStyle = {
    'position': 'relative',
    'top': '80px',
    'text-align': 'justify',
    'background-color': 'black',
    'color':'lightgrey',
    'padding-top':'50px'
}

const Contact = () => {
    return(
        <div className = "container-fluid" style={rootStyle}>
            <Container>
            <Row>
                <Col xs={{ order: 'first' }}>
                    <h4>Services</h4>
                    <ol style={{'listStyleType':'none'}}>
                        <li>Income Tax</li>
                        <li>GST</li>
                        <li>Accounts & Book Keeping</li>
                        <li>Payroll Management</li>
                        <li>Statutory Compliance</li>
                        <li>Management & Consultancy Services</li>
                    </ol>
                </Col>
                <Col xs>
                    <h4>Quick Links</h4>
                    <ol style={{'listStyleType':'none'}}>
                        <li as={Link} to="/">Home</li>
                        <li as={Link} to="/about">About</li>
                        <li as={Link} to="/contact">Contact</li>
                    </ol></Col>
                <Col xs={{ order: 'last' }}>
                    <h4>Address</h4>
                    <ol style={{'listStyleType':'none'}}>
                        <li> Address : Adiudupi, Udupi Dist. - 576106 (KARNATAKA)</li>
                        <li>Phone : +91-123456789, +91-9876451239</li>
                        <li>Email : info@hectawaysbusinesssolution.com</li>
                    </ol>
                    </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Contact;