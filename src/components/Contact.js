import React from 'react'

function Contact() {
  return (
    <section class="contact-us section" id="contact">
        <div class="container">
            <h2 class="section-title">Contact Us</h2>
            <p class="section-description">Get in touch with our team for any inquiries or collaboration opportunities.
            </p>

            <div class="contact-layout">
                {/* <!-- Contact Information in Cards --> */}
                <div class="contact-cards">
                    <div class="card">
                        <div class="user-name">
                            <i class="fa-regular fa-circle-user"></i>
                            Mr. Anil Kachave
                        </div>
                        <div class="user-role">
                            <i class="fa-solid fa-briefcase"></i>
                            Partner
                        </div>
                        <div class="user-contact">
                            <i class="fa-solid fa-square-phone"></i>
                            +91 94222 88006
                        </div>
                        <div class="user-contact">
                            <i class="fa-regular fa-envelope"></i>
                            Partner@brfashion.com
                        </div>
                    </div>

                    <div class="card">
                        <div class="user-name">
                            <i class="fa-regular fa-circle-user"></i>
                            Mr. Swapnil Kachave
                        </div>
                        <div class="user-role">
                            <i class="fa-solid fa-briefcase"></i>
                            General Administration
                        </div>
                        <div class="user-contact">
                            <i class="fa-solid fa-square-phone"></i>
                            +91 94222 38700
                        </div>
                        <div class="user-contact">
                            <i class="fa-regular fa-envelope"></i>
                            info@brfashion.com
                        </div>
                    </div>
                    <div class="card">
                        <div class="user-name">
                            <i class="fa-solid fa-house-chimney"></i>
                            Head Office
                        </div>
                        <div class="user-role">
                            <i class="fa-solid fa-map-location-dot"></i> Gat No-369/2, Mumbai Agra Road, Deobhane, Tal.
                            Dist-Dhule, Maharashtra, 424307, India
                        </div>
                        <div class="user-contact">
                            <i class="fa-regular fa-envelope"></i>
                            Admin@brfashion.com
                        </div>
                    </div>
                </div>

                {/* <!-- Google Map --> */}
                <div class="contact-map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3370.6604373204896!2d74.78036537471384!3d21.004613788608495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bded0765ad3703b%3A0x87bd0666e99e0f75!2sB%20R%20Fashion!5e1!3m2!1sen!2sin!4v1726857794010!5m2!1sen!2sin"
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact