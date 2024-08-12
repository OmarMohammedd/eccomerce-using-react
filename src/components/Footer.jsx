import React from 'react'

function Footer() {
  return (
    <footer className="footer">
    <div className="container footer_container">
      <div className="footer_item">
        <a href="#" className="footer_logo">
          Exclusive
        </a>
        <div
         style={{
            fontSize:"20px"
         }}
         className="footer_p">
          Subscribe
        </div>
        <div className="footer_p">
           Get 10% off your first order
        </div>
        <div className="footer_p"
         style={{
           position:"relative",
           width: "200px"
         }}
         >
           <input type="email" placeholder='Enter your email'/>
           <img
            style={{
              position:"absolute",
              right: '2.8rem',
              top: "0.6rem"
            }}
            src="./image/icon-send.png" alt="" />
        </div>
      </div>
      <div className="footer_item">
        <h3 className="footer_item_titl">Support</h3>
        <ul className="footer_list">
          <li className="footer_p">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
          <li className="footer_p">exclusive@gmail.com</li>
          <li className="footer_p">+88015-88888-9999</li>
        </ul>
      </div>
      <div className="footer_item">
        <h3 className="footer_item_titl">Account</h3>
        <ul className="footer_list">
          <li className="footer_p">My Account</li>
          <li className="footer_p">Login / Register</li>
          <li className="footer_p">Cart</li>
          <li className="footer_p">Wishlist</li>
          <li className="footer_p">Shop</li>
        </ul>
      </div>
      <div className="footer_item">
        <h3 className="footer_item_titl">Quick Link</h3>
        <ul className="footer_list">
          <li className="footer_p">Privacy policy</li>
          <li className="footer_p">Terms of use</li>
          <li className="footer_p">FAQ's</li>
          <li className="footer_p">Contact</li>
        </ul>
      </div>


      <div className="footer_item">
        <h3 className="footer_item_titl">Download App</h3>
        <ul className="footer_list">
          <li className="footer_p">Save $3 with App New User Only</li>
        </ul>
        <div className='footer_p'>
            <img src="./image/Qrcode 1.png" alt="" 
             style={{
               marginRight:"1rem"
             }}
            />
            <img src="./image/Frame 718.png" alt="" />
        </div>
        <div className="iconss footer_p"
         style={{
           display:"flex",
           alignItems:"center",
           gap:"2.5rem",
         }}
        >
            <img src="./image/Icon-Facebook.png" alt="" />
            <img src="./image/Icon-Twitter.png" alt="" />
            <img src="./image/icon-instagram.png" alt="" />
            <img src="./image/Icon-Linkedin.png" alt="" />
        </div>
      </div>



    </div>
    <div className="footer_bottom">
      <div className="container footer_bottom_container">
        <p className="footer_copy">
          Copyright Exclusive 2023. All right reserved
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer