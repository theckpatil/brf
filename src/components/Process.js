import React from 'react'

function Process() {
    const handleCardClick = (e) => {
        e.preventDefault();  // Prevent default scrolling behavior
      };

  return (
    <section class="process" id="process">
        <div class="container">
            <h2>Manufacturing Process</h2>
            <p class="section-description">From concept to creation, explore how we craft garments with precision and care.</p>
            <div class="process-grid">

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/Design.png" alt="Design Icon"/>
                    </div>
                    <h3>Design</h3>
                    <p>Turning your vision into designs.</p>
                </div>
                
                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/sample.png" alt="Sample Icon"/>
                    </div>
                    <h3>Sample</h3>
                    <p>Creating prototypes to perfect every detail.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/order.png" alt="Embroidery Icon"/>
                    </div>
                    <h3>Order Confirmation</h3>
                    <p>Creating intricate embroidery patterns with precision.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/fab-2.png" alt="Washing Icon"/>
                    </div>
                    <h3>Fabric Processing</h3>
                    <p>Premium fabric, expertly treated for perfect garments.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/cut.png" alt="Cutting Icon"/>
                    </div>
                    <h3>Cutting</h3>
                    <p>Precision cutting using advanced machinery</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/painting.png" alt="Printing Icon"/>
                    </div>
                    <h3>Printing</h3>
                    <p>Applying high-quality prints for your custom design.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/sewing-machine.png" alt="Stitching Icon"/>
                    </div>
                    <h3>Stitching</h3>
                    <p>Expert stitching to assemble your garment seamlessly.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/garment-check.png" alt="Quality Control Icon"/>
                    </div>
                    <h3>Garment Checking</h3>
                    <p>Thorough inspection to maintain high standards.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/Iron.png" alt="Ironing Icon"/>
                    </div>
                    <h3>Ironing</h3>
                    <p>Ensuring your garment looks crisp and polished.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/packing.png" alt="Packaging Icon"/>
                    </div>
                    <h3>Packaging</h3>
                    <p>Neatly packaging the garment for delivery.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/final-check.png" alt="Final Delivery Icon"/>
                    </div>
                    <h3>Final Inspection</h3>
                    <p>Final inspections guarantee exceptional quality in every garment.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/Shipping.png" alt="Shipping Icon"/>
                    </div>
                    <h3>Shipping</h3>
                    <p>Ensuring safe and timely delivery to your destination.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Process