import React from 'react'
import { NavLink } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';


function SignUp() {
  return (
    <>
    <Navbar/>

  <section className="section">
    <div className="auth_container">
      <div className="auth_img">
        <img src="./image/auth-image.png" alt="" className="auth_image" />
      </div>
      <div className="auth_content">
        <form action="" className="auth_form">
          <h2 className="form_title">Create your account</h2>
          <p className="auth_p">Enter your details below</p>
          <div className="form_group">
            <input type="text" placeholder="Name" className="form_input" />
          </div>
          <div className="form_group">
            <input type="email" placeholder="Email" className="form_input" />
          </div>
          <div className="form_group form_pass">
            <input
              type="password"
              placeholder="Password"
              className="form_input"
            />
          </div>
          <div className="form_group">
            <button className="form_btn">
              <a href="#" className="form_link">
                Create Account
              </a>
            </button>
          </div>
          <div className="form_group">
            <span>
              Already have an account?
              <NavLink to="/login" className="form_auth_link">
                Login
              </NavLink>
            </span>
          </div>
        </form>
      </div>
    </div>
  </section>

  <Footer/>

</>

  )
}

export default SignUp