import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className="section">
        <div className="container">
          <p className="paragraph_top">
            Home / <span>Cantact</span>
          </p>
          <div className="parent_contact">
            <div className="contact_left">

              <div className="contact_left_top">
                <div className="contact_content">
                  <img src="./image/icons-phone.png" alt="" />
                  <p>Call To Us</p>
                </div>
                <div
                style={{
                   display:"flex",
                   flexDirection:"column",
                   gap:"2rem"
                }}
                 >
                  <span>We are available 24/7, 7 days a week.</span>
                  <span
                   style={{
                     marginBottom:"4rem"
                   }}
                  >Phone: +8801611112222</span>
                </div>
              </div>

              <hr />

              <div className="contact_left_bottom">
                <div className="contact_content">
                  <img src="./image/icons-mail.png" alt="" />
                  <p>Write To US</p>
                </div>
                <div
                  style={{
                    display:"flex",
                    flexDirection:"column",
                    gap:"2rem"
                 }}
                >
                  <span>
                    Fill out our form and we will contact you within 24 hours.
                  </span>
                  <span>Emails: customer@exclusive.com</span>
                  <span>Emails: support@exclusive.com</span>
                </div>
              </div>
            </div>

            <div className="contact_right">
              <div className="contact_rightt">
                <div>
                  <input type="text" placeholder="Your Name " />
                  <span>*</span>
                </div>
              <div>
                  <input type="email" placeholder="Your Email " />
                  <span>*</span>
              </div>
                <div>
                  <input type="text" placeholder="Your Phone " />
                  <span>*</span>
                </div>
              </div>
              <textarea placeholder="Your Massage" name="" id=""></textarea>
              <button className="container_btn_a">Send Massage</button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
