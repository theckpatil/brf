import React from 'react'

function Capabilities() {
  return (
    <section class="our-capabilities section" id="capabilities">
        <div class="container">
            <h2 class="section-title" style={{width: '300px'}}>Our Capabilities</h2>
            <p class="section-description"> Top-quality garment manufacturing with full in-house services.</p>

            <div class="capability-cards">
                <div class="capability-card" data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src="/assets/img/capabilites/knitting-machine.png" alt="In-House Knitting"/>
                    <h3>In-House Knitting</h3>
                    {/* <!-- <p>1500 pcs/day capacity delivers high-quality prints through specialized curing processes.</p> --> */}
                    <p>Inhouse knitting with a production capacity of 3 tons per day facilitates in manufacturing best
                        quality of fabric,Also, in Time and maintaining the estimated time schedule of Buyer.</p>
                </div>

                {/* <!-- Card 2 --> */}
                <div class="capability-card" data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src="assets/img/capabilites/t-shirt-screen-printing-500x500.webp" alt="In-House Printing"/>
                    <h3>In-House Printing</h3>
                    {/* <!-- <p>1500 pcs/day capacity delivers high-quality prints through specialized curing processes.</p> --> */}
                    <p>Inhouse Printing with a capacity of 1500 pcs/day. We provide our buyers with excellent quality of
                        prints with the help of our specialized & trained team of strokers, accompanied with curing
                        process.
                    </p>
                </div>
                {/* <!-- Card for Garment Cutting --> */}
                <div class="capability-card" data-aos="zoom-in-down" data-aos-duration="1000">
                    <img src="assets/img/capabilites/cutting.jpg" alt="Garment Cutting"/>
                    <h3>Garment Cutting</h3>
                    {/* <!-- <p>Our precision garment cutting process ensures consistency and accuracy.</p> --> */}
                    <p>Our garment cutting team ensures precision and quality at every step, delivering garments that
                        meet
                        the highest standards.</p>
                </div>
                {/* <!-- Card 3 --> */}
                <div class="capability-card" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src="/assets/img/capabilites/emb.webp" alt="In-House Embroidery"/>
                    <h3>In-House Embroidery</h3>
                    {/* <!-- <p>State of the art embroidery machines ensure classic and cost-effective designs.</p> --> */}
                    <p>We also have an Embroidery Machine Inhouse. So that our esteemed buyers can get the best finish
                        and
                        classic look on their hard worked tees. Also reducing the cost and production time.</p>
                </div>

                {/* <!-- Card 4 (Centered in second row) --> */}
                <div class="capability-card" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src="assets/img/capabilites/production.jpg" alt="Production Capacity"/>
                    <h3>Production Capacity</h3>
                    {/* <!-- <p>Our 100,000 pcs/month capacity ensures we meet deadlines without compromising on quality.</p> --> */}
                    <p>With 100,000 pcs/month capacity Our production team is always ready to manufacture garments in
                        time
                        and without affecting quality.</p>
                </div>

                {/* <!-- Card 5 (Centered in second row) --> */}
                <div class="capability-card" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src="assets/img/capabilites/quality.webp" alt="Quality Control"/>
                    <h3>Quality Control</h3>
                    {/* <!-- <p>Our rigorous quality checks guarantee the highest standards in every garment we produce.</p> --> */}
                    <p>Highly skilled quality team ensures that no defect is left unseen & buyer gets only the best
                        pieces.
                        Afterall, Quality is our Moto.</p>
                </div>
                {/* <!-- Card 6 (Packaging) --> */}
                <div class="capability-card" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src="assets/img/our-services/Merchandisig.jpg" alt="Merchandising"/>
                    <h3>Merchandising</h3>
                    <p>Our dedicated team ensures smooth communication with clients, vendors, and production,
                        guaranteeing timely deliveries.</p>
                </div>
                {/* <!-- Card 6 (Packaging) --> */}
                <div class="capability-card" data-aos="zoom-in-up" data-aos-duration="1000">
                    <img src="assets/img/our-services/sampling2.webp" alt="Sampling"/>
                    <h3>Sampling</h3>
                    <p>We offer a specialized sampling team to create custom patterns and prototypes tailored to your
                        specifications.</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Capabilities