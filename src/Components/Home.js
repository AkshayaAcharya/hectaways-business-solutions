import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';
const Home = () => {
    const rootStyle = {
        height: '100vh',
        'min-height' : '100vh'
    }
    return(
        <div className="container">
            <div style={rootStyle}>
            <h2>Carousel to be added</h2>
            </div>
            <About />
            <Services />
            <Contact />
        </div>
    )
}

export default Home;