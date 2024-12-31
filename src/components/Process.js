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
                    <p>Transforming your ideas into creative and unique designs that reflect your vision.</p>
                </div>
                
                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/sample.png" alt="Sample Icon"/>
                    </div>
                    <h3>Sample</h3>
                    <p>Creating prototypes to perfect every design detail before production.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/order.png" alt="Embroidery Icon"/>
                    </div>
                    <h3>Order Confirmation</h3>
                    <p>Confirming your order details to ensure everything is accurate and delivered on time.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/fab-2.png" alt="Washing Icon"/>
                    </div>
                    <h3>Fabric Processing</h3>
                    <p>Premium fabrics are carefully treated and processed to ensure top-quality garments.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/cut.png" alt="Cutting Icon"/>
                    </div>
                    <h3>Cutting</h3>
                    <p>Accurate cutting with state-of-the-art machinery for perfect garments.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/painting.png" alt="Printing Icon"/>
                    </div>
                    <h3>Printing</h3>
                    <p>Bringing your custom designs to life with precision and vibrant prints.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/sewing-machine.png" alt="Stitching Icon"/>
                    </div>
                    <h3>Stitching</h3>
                    <p>High-quality stitching for a perfect fit and long-lasting durability.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/garment-check.png" alt="Quality Control Icon"/>
                    </div>
                    <h3>Garment Checking</h3>
                    <p>Carefully checking each garment to ensure it meets our quality standards.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/Iron.png" alt="Ironing Icon"/>
                    </div>
                    <h3>Ironing</h3>
                    <p>Ensuring each garment is wrinkle-free and has a polished, crisp finish.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/packing.png" alt="Packaging Icon"/>
                    </div>
                    <h3>Packaging</h3>
                    <p>Carefully packaged garments to ensure they reach you in perfect condition.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/final-check.png" alt="Final Delivery Icon"/>
                    </div>
                    <h3>Final Inspection</h3>
                    <p>Ensuring every garment meets the highest quality standards before delivery.</p>
                </div>

                <div class="process-card" onClick={handleCardClick}>
                    <div class="icon-container">
                        <img src="assets/img/process/Shipping.png" alt="Shipping Icon"/>
                    </div>
                    <h3>Shipping</h3>
                    <p>Reliable shipping, ensuring your garments arrive safely and on schedule.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Process