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
                    <p>
                        <strong style={{color: 'var(--office-green)'}}>Since our establishment in 2012</strong>, <strong
                            style={{color: 'var(--office-green)'}}>BR Fashion</strong> has been the driving force behind
                        some of the most recognized names in the fashion industry, including <strong
                           style={{color: 'var(--office-green)'}}>Spykar</strong> and
                        <strong style={{color: 'var(--office-green)'}}>Bewakoof</strong>. With a passion for excellence and
                        a commitment to quality, we
                        specialize in crafting high-quality, customized apparel solutions that empower brands to stand
                        out in a competitive market.
                    </p>
                    <p>
                        At <strong style={{color: 'var(--office-green)'}}>BR Fashion</strong> , we believe that every
                        garment tells a story. Our experienced team is dedicated to
                        precision stitching and innovative design, ensuring that each piece not only meets but exceeds
                        expectations.
                    </p>
                    <p style={{color: 'var(--office-green)'}}>
                        Join us on a journey of creativity and craftsmanship, where your vision becomes reality.
                        Together, we can shape the future of fashion.
                    </p>
                </div>

            </div>
        </div>
    </section>
    );
}

export default About;
