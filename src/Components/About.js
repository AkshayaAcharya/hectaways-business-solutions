import React from 'react';
const About = () => {
    const rootStyle = {
        'position': 'relative',
        'top': '30px',
        'padding': '10px',
        'text-align': 'justify'
    }
    const contentStyle = {
        'text-indent': '50px',
        'font-size': '20px'
    }
    return(
        <div style={rootStyle}>
            <h3>About Us</h3>
            <p style={contentStyle}>Our firm Hectaways Business Solutions is located at Udupi. Our team comprises young and experienced professionals who are adept at providing wide range of services. Our area of expertise includes both traditional services as well as modern IT enabled services.  </p>
            <h3>Why choose us</h3>
            <p style={contentStyle}>In the emerging competitive world it is imperative for all business to comply with applicable statutes at minimum cost. We would ensure effective and efficient services to our clients at optimum cost. We assure comprehensive range of data protection and privacy of our client’s data.</p>
        </div>
    )
}

export default About;