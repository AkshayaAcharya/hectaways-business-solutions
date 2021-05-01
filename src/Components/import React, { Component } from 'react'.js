import React, { Component } from 'react';
import {Link, BrowserRouter  as Router} from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import logo from "../assets/hectaways.png";
import accounts from "../assets/accounts.jpg";
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
    }
    render() {
        return (
            // <div>
            <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                    <Link className="navbar-brand" to=""><img src={logo} alt="" width="" height="80" /></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                        <Link className="nav-item nav-link active" to="#">HOME <span className="sr-only">(current)</span></Link>
                        <Link className="nav-item nav-link" to="#">ABOUT</Link>
                        <Link className="nav-item nav-link" to="#">SERVICES</Link>
                        <Link className="nav-item nav-link" to="#">CONTACT</Link>
                        </div>
                    </div>
                </nav>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 slide-img"
                        src={accounts}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 slide-img"
                        src={accounts}
                        alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img
                        className="d-block w-100 slide-img"
                        src={accounts}
                        alt="Third slide"
                        />

                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    </Carousel>
            </div>
            </Router>
            // </div>       
        )
    }
}
