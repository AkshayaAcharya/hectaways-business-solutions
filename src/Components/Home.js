import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import { Carousel } from 'react-bootstrap';
import first from '../assets/accounts.jpg';
import second from '../assets/calculator.jpg';
import third from '../assets/websiteDevelopment.jpg';
const Home = () => {
    const rootStyle = {
        'position': 'relative',
        'top': '30px',
        'text-align': 'justify'
    }
    return(
        <div style={rootStyle}>  
            <Carousel style={{'width': '100%'}}>  
                <Carousel.Item style={{'height':"700px"}} >  
                <img style={{'height':'700px','width': '100%'}}  
                    className="d-block w-100"  
                    src={first}  
                    alt=""/>  
                <Carousel.Caption>  
                <h3>First Demo </h3>  
                </Carousel.Caption>  
             </Carousel.Item  >  
             <Carousel.Item style={{'height':"700px"}}>  
             <img style={{'height':'700px'}}  
                className="d-block w-100"  
                src={second}   alt="" />  
                   <Carousel.Caption>  
               <h3>Second Demo</h3>  
                  </Carousel.Caption>  
            </Carousel.Item>  
            <Carousel.Item style={{'height':"700px"}}>  
                <img style={{'height': '700px'}}  
                    className="d-block w-100"  
                    src={third}  alt="" />  
                    <Carousel.Caption>  
                    <h3>Third Demo</h3>  
                    </Carousel.Caption>  
                    </Carousel.Item>  
                    </Carousel>  
            <About />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;