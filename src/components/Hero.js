import React from 'react';

function Hero() {   
    return (
        <section className="hero">
            <div className="hero-content">
                <div className="t-shirt-container">
                    <img src="../assets/img/T-shirt/T-shirt-svg.svg" alt="T-shirt" className="t-shirt-right" />
                </div>
                <h1><span style={{color: 'black'}}>BR</span> Fashion</h1>
                <h2>Where Quality Meets Fashion</h2>
                <p>Premium garments crafted for top fashion brands, customized to perfection.</p>
                <a href="#about" class="cta-btn">Discover More</a>
            </div>
        </section>
    );
}

export default Hero;
