import React, { Component } from 'react';
import { Card, Collapse, Button, ListGroup, ListGroupItem } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
const card = {
    'backgroundColor': 'rgba(249, 252, 252, 0.5);',
    'color':'black',
}
const cardTitle = {
    // 'backgroundColor': '#171819',
    'color': 'blue'
}
const rootStyle = {
    'position': 'relative',
    'top': '40px',
    'text-align': 'justify'
}
class Services extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			text1open: false,
			text2open: false,
			text3open: false,
			text4open: false,
			text5open: false,
			text6open: false,
		};
	}

	render() {
		const { open } = this.state;
		return (
			<div className="container" style={{ 'margin-left': 'auto', 'margin-right': 'auto', 'position': 'relative', 'top':'40px'}} >
                <h3>Services</h3>
                <div className="row">
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text1open: true })}
                            onMouseOut={() => this.setState({ text1open: false })}
                            aria-controls="example-collapse-text1"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>Income Tax</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text1open}>
                                <div id="example-collapse-text1">
                                   Tax planning and preparation form a winning combination for our successful individual and business clients. Whether you are an individual or a business entity, our experienced staff can develop tax strategies that take advantage of new tax laws and legislation. We would undertake all filing and compliance activities under Income Tax Act such as Preparation and Filing of Income Tax Returns, TDS registration, Filing of TDS Returns, Advance tax payments and calculations etc.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text2open: true })}
                            onMouseOut={() => this.setState({ text2open: false })}
                            aria-controls="example-collapse-text2"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>GST</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text2open}>
                                <div id="example-collapse-text2">
                                    Our team consists of expertised professionals in all matters of GST. We would ensure better compliance of all GST laws and amendments on part of our clients. We undertake fiing of all GST returns and consultancy on GST related matters.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text3open: true })}
                            onMouseOut={() => this.setState({ text3open: false })}
                            aria-controls="example-collapse-text3"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>Accounting & Book Keeping</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text3open}>
                                <div id="example-collapse-text3">
                                    Providing financial information to our clients in a timely and accurate manner is a commitment that we feel cannot be compromised. Meaningful, well-organized financial records ensure that your business operations will run more efficiently on a daily basis. Our firm provides a full range of accounting services, including the following:
                                    <ListGroup>
                                    <ListGroupItem>Financial statement preparation</ListGroupItem>
                                    <ListGroupItem>Bookkeeping (Monthly/Quarterly/Annually)</ListGroupItem>
                                    <ListGroupItem>Accounting system setup for new businesses</ListGroupItem>
                                    <ListGroupItem>Personal financial statements</ListGroupItem>
                                    </ListGroup>
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text4open: true })}
                            onMouseOut={() => this.setState({ text4open: false })}
                            aria-controls="example-collapse-text4"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>Payroll Management</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text4open}>
                                <div id="col-md-4 col-sm-6 col-12">
                                    We can assist you in implementing the controls necessary to ensure a reliable, efficient, and effective payroll system. Our firm can also help you develop a payroll system and prepare all necessary payroll tax returns in a timely manner. Our payroll process includes pre-tax deductions, state payroll filings, and related payroll issues.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text5open: true })}
                            onMouseOut={() => this.setState({ text5open: false })}
                            aria-controls="example-collapse-text5"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>Statutory Compliance</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text5open}>
                                <div id="example-collapse-text5">
                                    The landscape of laws and statutes are constantly evolving. It takes a special agility to keep abreast of all the latest developments and ensure compliance. It is absolutely imperative to comply with all legal and statutory norms for businesses to operate successfully in India.  At Hectaways Business Solutions, we offer compliance services that perfectly meet your organisation’s requirements. No matter what the size of your organisation is, we would ensure optimum compliance of applicable laws and statutes. To know how we can help your organisation with our range of Statutory and Compliance Outsourcing Services, schedule an appointment with us right away.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center shadow p-3 mb-5 bg-white rounded" style={card}
                            onMouseOver={() => this.setState({ text6open: true })}
                            onMouseOut={() => this.setState({ text6open: false })}
                            aria-controls="example-collapse-text6"
                            aria-expanded={open}
                            >
                            <Card.Body>
                            <Card.Title style={cardTitle}>Management & Consultancy Services</Card.Title>
                            <Card.Text>
                                This card has supporting text below as a natural lead-in to additional
                                content.{' '}
                            </Card.Text>
                            <Card.Text>
                                <Collapse in={this.state.text6open}>
                                <div id="example-collapse-text6">
                                    No content to add
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
    {/* <Accordion>
    <div className="row">
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header}  eventKey="0">
            Income Tax
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
            <Card.Body>Tax planning and preparation form a winning combination for our successful individual and business clients. Whether you are an individual or a business entity, our experienced staff can develop tax strategies that take advantage of new tax laws and legislation. We would undertake all filing and compliance activities under Income Tax Act such as Preparation and Filing of Income Tax Returns, TDS registration, Filing of TDS Returns, Advance tax payments and calculations etc.</Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
            GST
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
            <Card.Body>Our team consists of expertised professionals in all matters of GST. We would ensure better compliance of all GST laws and amendments on part of our clients. We undertake fiing of all GST returns and consultancy on GST related matters.</Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
            Accounting & Book Keeping 
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
            <Card.Body>Providing financial information to our clients in a timely and accurate manner is a commitment that we feel cannot be compromised. Meaningful, well-organized financial records ensure that your business operations will run more efficiently on a daily basis. Our firm provides a full range of accounting services, including the following:
                <ul>
                    <li>Financial statement preparation</li>
                    <li>Bookkeeping (Monthly/Quarterly/Annually)</li>
                    <li>Accounting system setup for new businesses</li>
                    <li>Personal financial statements</li>
                </ul>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
    </div>
    <div className="row">
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
            Payroll Management
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
            <Card.Body>We can assist you in implementing the controls necessary to ensure a reliable, efficient, and effective payroll system. Our firm can also help you develop a payroll system and prepare all necessary payroll tax returns in a timely manner. Our payroll process includes pre-tax deductions, state payroll filings, and related payroll issues.</Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
            Statutory Compliance
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
            <Card.Body>The landscape of laws and statutes are constantly evolving. It takes a special agility to keep abreast of all the latest developments and ensure compliance. It is absolutely imperative to comply with all legal and statutory norms for businesses to operate successfully in India.  At Hectaways Business Solutions, we offer compliance services that perfectly meet your organisation’s requirements. No matter what the size of your organisation is, we would ensure optimum compliance of applicable laws and statutes. To know how we can help your organisation with our range of Statutory and Compliance Outsourcing Services, schedule an appointment with us right away.</Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
        <div className="col-md-4 col-sm-6 col-12 pt-4">
        <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
            Management & Consultancy services
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
            <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
        </Card>
        </div>
    </div>

    </Accordion> */}
			</div>
		);
	}
}
export default Services;