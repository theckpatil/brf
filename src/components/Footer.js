import React, { useState }  from 'react';

function Footer() {
    // State to store the current year
     const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  return (
    <footer class="footer">
        <div class="container">
            <div class="footer-content">
                <div class="footer-section about">
                    <h3>BR Fashion</h3>
                    <img src="/assets/img/Logo/BRF-Logo-New-Without-Bg.png" alt="" width="150px"/>
                </div>

                <div class="footer-section links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#services">Services</a></li>
                        <li><a href="#clients">Our Clients</a></li>
                    </ul>
                </div>

                <div class="footer-section contact">
                    <h3>Contact Us</h3>
                    <p><i class="fas fa-phone"></i> +91 94222 88006 (Mr. Anil Kachave)</p>
                    <p><i class="fas fa-envelope"></i> info@brfashion.com</p>
                    <p><i class="fas fa-map-marker-alt"></i> Deobhane, Dhule, Maharashtra</p>
                </div>

                <div class="footer-section social">
                    <h3>Follow Us</h3>
                    <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                    <a href="#" class="social-icon"><i class="fab fa-facebook"></i></a>
                </div>
            </div>

            <div class="footer-bottom">
                <p class="copyright">&copy; <span id="year">{currentYear}</span> BR Fashion. All Rights Reserved.</p>
                <p class="credit">Designed by <a href="https://yourportfolio.com" target="_blank">Chandrakant Patil</a>.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer