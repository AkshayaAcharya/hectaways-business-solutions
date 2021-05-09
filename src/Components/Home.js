import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Carousel, Card } from 'react-bootstrap';
import first from '../assets/accounts.jpg';
import second from '../assets/calculator.jpg';
import third from '../assets/websiteDevelopment.jpg';
const Home = () => {
    const rootStyle = {
        'position': 'relative',
        'top': '30px',
        'text-align': 'justify',
    }
    const backgroundStyle = {
        'background-image': 'url(../assets/background.jpg)',
        'background-repeat': 'no-repeat',
        'background-position': '0%',
        'color': 'black',
        'background-attachment': 'fixed',
        'background-size': '100%'
    }
    
    return(
        <div className="container-fluid px-0" style={rootStyle}>  
            <Carousel style={{'width': '100%'}}>  
                <Carousel.Item style={{'height':"700px"}} >  
                <img style={{'width': '100%'}}  
                    className="d-block w-100"  
                    src={first}  
                    alt=""/>  
                <Carousel.Caption>  
                <h3>Income Tax</h3>  
                </Carousel.Caption>  
             </Carousel.Item  >  
             <Carousel.Item style={{'height':'100%'}}>  
             <img style={{'width': '100%'}} 
                className="d-block w-100"  
                src={second}   alt="" />  
                   <Carousel.Caption>  
               <h3>Second Demo</h3>  
                  </Carousel.Caption>  
            </Carousel.Item>  
            <Carousel.Item style={{'height':"700px"}}>  
                <img style={{'width': '100%'}} 
                    className="d-block w-100"  
                    src={third}  alt="" />  
                    <Carousel.Caption>  
                    <h3>Third Demo</h3>  
                    </Carousel.Caption>  
                    </Carousel.Item>  
            </Carousel>  
            <div style={backgroundStyle}>
            <About />
            <Services />
            <Contact />
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </div>
        </div>
    )
}

export default Home;