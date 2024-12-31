import React from 'react';

function About() {
    return (
        <section class="who-we-are section" id="about">

        <div class="container">
            <h2 class="section-title">About Us</h2>

            <div class="who-content">
                {/* <!-- Left Side: BR Fashion Logo --> */}
                <div class="who-logo" data-aos="slide-right" data-aos-duration="1000">
                    <img src="/assets/img/Logo/BRF-Logo-New-Without-Bg.png" alt="BR Fashion Logo"/>
                </div>

                {/* <!-- Right Side: About Information --> */}
                <div class="who-text"  data-aos="zoom-in" data-aos-duration="1000">
                <p> Welcome to <strong>BR Fashion</strong>, where quality and innovation meet the ever-changing world of fashion.
                        Since 2012, we’ve been creating premium apparel that combines style, comfort, and individuality,
                        always keeping our clients needs in mind.</p>

                    <p>We take pride in working with leading brands and retailers, blending traditional craftsmanship
                        with modern trends. Over the years, we’ve earned a reputation for delivering high-quality,
                        timeless designs that our clients trust and love.
                    </p>

                    <p>At <strong>BR Fashion</strong>, we’re not just about making clothes. we’re about creating an experience. With a
                        skilled team, top-notch manufacturing, and a focus on sustainability, we ensure every product is
                        crafted with care and precision. Whether it’s casual wear, formal wear, or custom designs, we
                        always deliver on time with the highest standards.</p>
                </div>

            </div>
        </div>
    </section>
    );
}

export default About;
