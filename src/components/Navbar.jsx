import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from '../Context/Context';


function Navbar() {
  const [isMobileNavVisible, setMobileNavVisible] = useState(false);

  const handleHamburgerClick = () => {
    setMobileNavVisible(!isMobileNavVisible);
  };
  const { cartCount } = useCart();


  const { wishlistItems } = useCart();
  const wishlistCount = wishlistItems.length;

  
  return (
    <>
       <div className="top_nav">
    <div className="container top_nav_container">
<div
 style={{
  display:"flex",
  justifyContent:"space-between",
  alignItems:"center",
  width:"100%"
 }}
>
  <div></div>
      <div className="top_nav_wrapper">
        <p className="tap_nav_p">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </p>
        <a href="#" className="top_nav_link">
          SHOP NOW
        </a>
      </div>
      <div
       style={{display:"flex",alignItems:"center",gap:"0.7rem"}}
      >
        <p style={{color:"#fff"}}>English</p>
        <img src="/image/DropDown.png" alt="" />
      </div>
</div>
    </div>
  </div>
  <div>
      <nav className="nav">
        <div className="container nav_container">
          <a href="/" className="nav_logo">
            EXCLUSIVE
          </a>
          <ul className="nav_list">
            <li className="nav_item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/about" className="nav_link">
                About
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/contact" className="nav_link">
                Contact
              </NavLink>
            </li>
            <li className="nav_item">
              <NavLink to="/signup" className="nav_link">
                Sign up
              </NavLink>
            </li>
          </ul>
          <div className="nav_items">
            <form action="#" className="nav_form">
              <input
                type="text"
                className="nav_input"
                placeholder="search here...."
              />
              <img src="/image/search.png" alt="" className="nav_search" />
            </form>


            <NavLink to="/wishlist" className="nav_wishlist_link">
      <img src="/image/heart.png" alt="Wishlist" className="nav_heart" />
      <div className="wishlist_count">{wishlistCount}</div>
    </NavLink>


            <NavLink to="/cart" className="nav_cart_link">
      <img src="/image/cart.png" alt="Cart" className="nav_cart" />
      <div className="cart_count">{cartCount}</div>
    </NavLink>



            <NavLink to="/account">
              <img src="/image/user.png" alt="" className="nav_cart" />
            </NavLink>
          </div>
          <span className="hamburger" onClick={handleHamburgerClick}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </span>
        </div>
      </nav>
      <nav className={`mobile_nav ${isMobileNavVisible ? "" : "mobile_nav_hide"}`}>
        <ul className="mobile_nav_list">
          <li className="mobile_nav_item">
            <NavLink to="/" className="mobile_nav_link">
              Home
            </NavLink>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              About
            </a>
          </li>
          <li className="mobile_nav_item">
            <a href="#" className="mobile_nav_link">
              Contact
            </a>
          </li>
          <li className="mobile_nav_item">
            <NavLink to="/signup" className="mobile_nav_link">
              Sign Up
            </NavLink>
          </li>
          <li className="mobile_nav_item">
            <NavLink to="/cart" className="mobile_nav_link">
              Cart
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
    </>
  )
}

export default Navbar