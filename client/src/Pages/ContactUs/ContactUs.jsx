import React from 'react'
import './ContactUs.css'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  return (
    <>
    <div className="temp"></div>
        <section>
            <div className="containercon">
                <div className="title">
                    <h2 className='contactus'>Contact Us</h2>
                </div>
                <div className="pg-contact">
                    <div className="contact-flex">
                        <h1 className='contact-head'>Office Address</h1>
                        <p>Shop No. 5, Anandi Bhuvan, Veer Savarkar Marg, Panch Pakhdi, Thane West 400 602</p>
                    </div>
                    <div className="contact-flex">
                        <h1 className='contact-head'>Contact Number</h1>
                        <p><Link href="tel: +91 96191 09199" className="contact-icon">Phone: +91 96191 09199</Link></p>
                        <p><Link href="tel: +91 96191 09199" className="contact-icon">Phone: +91 96191 09199</Link></p>
                    </div>
                    <div className="contact-flex">
                        <h1 className='contact-head'>Email Address</h1>
                        <p><Link href="mailto: saikaushiksadu@gmail.com" className="contact-icon">Email: ssk@gmail.com</Link></p>
                        <p><Link href="mailto: saikaushiksadu@gmail.com" className="contact-icon">Email: ssk@gmail.com</Link></p>
                    </div>
                    <div className="contact-flex">
                        <h1 className='contact-head'>Follow Us On</h1>
                        <div class="icons">
                            <Link href="#">
                            <i className="fab fa-facebook"></i>
                            </Link>
                            <Link href="#">
                            <i className="fab fa-instagram"></i>
                            </Link>
                            <Link href="#">
                            <i className="fab fa-github"></i>
                            </Link>
                            <Link href="#">
                            <i className="fab fa-twitter"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* Location */}
        <section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.983463068892!2d72.83328527507607!3d19.064464682137803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c91130392c07%3A0x3c47bf391c8de931!2sThadomal%20Shahani%20Engineering%20College!5e0!3m2!1sen!2sin!4v1688022564277!5m2!1sen!2sin" title='map' style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='map'></iframe>
        </section>
    </>
  )
}

export default ContactUs    