import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <div className="section">
        <div className="container story_container">
          <div className="story_content">
            <h3 className="story_content_title">Our Story</h3>
            <p className="story_content_p">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </p>
            <p className="story_content_p">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </p>
          </div>
          <div className="story_image">
            <img src="./image/Side Image.png" alt="" />
          </div>
        </div>
      </div>

      <div className="section section">
         <div className="container services_container">
                <div className="service service_utline">
                    <img src="./image/Services.png" alt="" />
                    <h3 className="services_number">10.2K</h3>
                    <p className="services">Sallers active our site</p>
                </div>
                <div className="service service_utline">
                    <img src="./image/Services (2).png" alt="" />
                    <h3 className="services_number">33k</h3>
                    <p className="services">Customer active in our site</p>
                </div>
                <div className="service service_utline">
                    <img src="./image/Services (3).png" alt="" />
                    <h3 className="services_number">45.5k</h3>
                    <p className="services">Anual gross sale in our site</p>
                </div>
        
         </div>
      </div>

       <div className="section section">
        <div className="container team_container">
                <div className="team">
                   <img alt="" src="./image/Frame 874.png" className="team_image"/>
                   <h3 className="team_name">Tom Cruise</h3>
                   <p className="team_designation">Founder & Chairman</p>
                   <img className="iconsss" src="./image/Frame 877.png" alt="" />
                </div>
                 <div className="team">
                  <img alt="" src="./image/Frame 875.png" className="team_image"/>
                  <h3 className="team_name">Emma Watson</h3>
                  <p className="team_designation">Managing Director</p>
                  <img className="iconsss" src="./image/Frame 877.png" alt="" />

                 </div>
                  <div className="team">
                      <img alt="" src="./image/Frame 876.png" className="team_image"/>
                      <h3 className="team_name">Will Smith</h3>
                      <p className="team_designation">Product Designer</p>
                      <img className="iconsss" src="./image/Frame 877.png" alt="" />
                  </div>
        </div>
       </div>

      <section className="section">
        <div className="container services_container">
          <div className="service">
            <img
              src="./image/icons/service-1.png"
              alt=""
              className="service_img"
            />
            <h3 className="service_title">FAST AND FREE DELIVERY</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service">
            <img
              src="./image/icons/service-2.png"
              alt=""
              className="service_img"
            />
            <h3 className="service_title">24/7 SUPPORT</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="service">
            <img
              src="./image/icons/service-3.png"
              alt=""
              className="service_img"
            />
            <h3 className="service_title">MONEY BACK GUARANTY</h3>
            <p className="service_p">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
}

export default About;
