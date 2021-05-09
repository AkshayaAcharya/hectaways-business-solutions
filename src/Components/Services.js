import React, { Component } from 'react';
import { Card, Collapse, Button } from 'react-bootstrap';
const card = {
    'backgroundColor': '#171819',
    'color':'white',
}
const cardTitle = {
    // 'backgroundColor': '#171819',
    'color': 'lightblue'
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
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="row pt-4">
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col-md-4 col-sm-6 col-12 pt-4">
                        <Card className="text-center" style={card}
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
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                                    terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                                    labore wes anderson cred nesciunt sapiente ea proident.
                                </div>
                            </Collapse>
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
			</div>
		);
	}
}
export default Services;