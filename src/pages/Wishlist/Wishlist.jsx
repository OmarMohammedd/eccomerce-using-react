import React, {useContext, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { CartContext } from '../../Context/Context';
import { useCart } from '../../Context/Context';



function Wishlist() {
  const swiperRef = useRef(null);


  const { setCartItems } = useContext(CartContext);

  const handleAddToCart = (e) => {
    const button = e.currentTarget;
    const newItem = {
      id: button.getAttribute('data-id'),
      title: button.getAttribute('data-title'),
      image: button.getAttribute('data-image'),
      price: parseFloat(button.getAttribute('data-price')),
      quantity: 1, // Default quantity
    };
  
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === newItem.id);
      if (existingItemIndex >= 0) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += newItem.quantity;
        return updatedItems;
      } else {
        return [...prevItems, newItem];
      }
    });
  };


  const { wishlistItems, removeFromWishlist } = useCart();

  const handleRemoveFromWishlist = (itemId) => {
    removeFromWishlist(itemId);
  };


  return (
    <>
      <Navbar />

      <section className="section">
        <div className="container">
          <div className="section_header ">
            <div className="section_headerrr">
              <h3
                className="section_title"
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >
                Wishlist (4)
              </h3>

              <div className="">
                <a
                  href="#"
                  className="container_btn_a"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  Move All To Bag
                </a>
              </div>
            </div>
          </div>
          {/* Swiper */}

          <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      className="mySwiper"
      ref={swiperRef}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
    >
    {wishlistItems.map(item => (
        <SwiperSlide key={item.id}>
          <div className="card">
            <div className="card_top">
              <img src={item.image} alt={item.title} className="card_img" />
              <div className="card_tag">-40%</div>
              <div className="card_top_icons">
                <img 
                  src="./image/Fill Eye.png" 
                  alt="Remove from wishlist" 
                  onClick={() => handleRemoveFromWishlist(item.id)}
                  style={{ cursor: 'pointer' }} 
                />
              </div>
            </div>
            <div className="card_body">
              <h3 className="card_title">{item.title}</h3>
              <p className="card_price">${item.price}</p>
              <button
                className="add_to_cart"
                data-id={item.id}
                data-title={item.title}
                data-image={item.image}
                data-price={item.price}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>

        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section_header"
           style={{
             display:"flex",
             alignItems:"center",
             justifyContent:"space-between",
             width:"100%",

           }}
          >
            
            
            <div className="section_category">
              <p className="section_category_p"
                style={{
                  color: "black",
                  fontSize: "20px",
                  fontWeight: "400",
                }}
              >Just For You</p>
            </div>

            
            
              <div className="">
                <a
                  href="#"
                  className="container_btn_a"
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(0, 0, 0, 0.5)",
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  See All
                </a>
              </div>
            
          </div>
          {/* Swiper */}

          <Swiper
      spaceBetween={30}
      pagination={{ clickable: true }}
      className="mySwiper"
      ref={swiperRef}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
    >
      <SwiperSlide>
        <div className="card">
          <div className="card_top">
            <img src="./image/items/item-1.png" alt="" className="card_img" />
            <div className="card_tag">-35%</div>
            <div className="card_top_icons">
            <img src="./image/items/Fill Eye.png" alt="" />

            </div>
          </div>

          <div className="card_body">
            <h3 className="card_title">HAVIT HV-G92 Gamepad</h3>
            <p className="card_price">$120 
              <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$160</span>
              </p>
            <div className="card_ratings">
              <div className="card_stars">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
              <p className="card_rating_numbers">(88)</p>
            </div>
            <button
              className="add_to_cart"
              data-id="1"
              data-title="HAVIT HV-G92 Gamepad"
              data-image="./image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
          </div>


        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card_top">
            <img src="./image/items/item-2.png" alt="" className="card_img" />
            <div className="card_top_icons">
            <img src="./image/items/Fill Eye.png" alt="" />

            </div>
          </div>
          <div className="card_body">
            <h3 className="card_title">AK-900 Wired Keyboard</h3>
            <p className="card_price">$960
            <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$1160</span>
            </p>
            <div className="card_ratings">
              <div className="card_stars">
                {[...Array(4)].map((_, index) => (
                  <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
                <img style={{width:"1.9rem"}} src="./image/Vector.png" alt="" />
              </div>
              <p className="card_rating_numbers">(75)</p>
            </div>
            <button
              className="add_to_cart"
              data-id="2"
              data-title="AK-900 Wired Keyboard"
              data-image="./image/items/item-2.png"
              data-price="960"
              style={{
                display:"block"
             }} 
             onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card"
     style={{position:"relative"}}
    >
        <div className="card_tag"
           style={{
            background:"#00FF66"
           }}
          >NEW</div>
      <div className="card_top">
        <img src="./image/items/item-3.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">IPS LCD Gaming Monitor</h3>
        <p className="card_price">$370
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$400</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="card_rating_numbers">(99)</p>
          <button
              className="add_to_cart"
              data-id="3"
              data-title="IPS LCD Gaming Monitor"
              data-image="./image/items/item-3.png"
              data-price="370"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card">
      <div className="card_top">
        <img src="./image/items/item-4.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">S-Series Comfort chair</h3>
        <p className="card_price">$375
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$400</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <img style={{width:"2rem"}} src="./image/star-half-filled.png" alt="" />

          </div>
          <p className="card_rating_numbers">(99)</p>
          <button
              className="add_to_cart"
              data-id="4"
              data-title="S-Series Comfort chair"
              data-image="./image/items/item-4.png"
              data-price="375"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card">
      <div className="card_top">
        <img src="./image/items/item-1.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">HAVIT HV-G92 Gamepad</h3>
        <p className="card_price">$120
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$160</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="card_rating_numbers">(88)</p>
          <button
              className="add_to_cart"
              data-id="1"
              data-title="HAVIT HV-G92 Gamepad"
              data-image="./image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card">
      <div className="card_top">
        <img src="./image/items/item-1.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">HAVIT HV-G92 Gamepad</h3>
        <p className="card_price">$120
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$160</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="card_rating_numbers">(88)</p>
          <button
              className="add_to_cart"
              data-id="1"
              data-title="HAVIT HV-G92 Gamepad"
              data-image="./image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card">
      <div className="card_top">
        <img src="./image/items/item-1.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">HAVIT HV-G92 Gamepad</h3>
        <p className="card_price">$120
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$160</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="card_rating_numbers">(88)</p>
          <button
              className="add_to_cart"
              data-id="1"
              data-title="HAVIT HV-G92 Gamepad"
              data-image="./image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>
  <SwiperSlide className="swiper-slide">
    <div className="card">
      <div className="card_top">
        <img src="./image/items/item-1.png" alt="" className="card_img" />
        <div className="card_top_icons">
        <img src="./image/items/Fill Eye.png" alt="" />

        </div>
      </div>
      <div className="card_body">
        <h3 className="card_title">HAVIT HV-G92 Gamepad</h3>
        <p className="card_price">$120
        <span style={{
                 textDecoration:"line-through",
                 marginLeft:"1rem",
                 color:"#000",
                 opacity:"0.5"
              }}>$160</span>
        </p>
        <div className="card_ratings">
          <div className="card_stars">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="card_rating_numbers">(88)</p>
          <button
              className="add_to_cart"
              data-id="1"
              data-title="HAVIT HV-G92 Gamepad"
              data-image="./image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
              style={{
                display:"block"
             }} 
            >
              Add to Cart
            </button>
        </div>
      </div>
    </div>
  </SwiperSlide>

    </Swiper>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Wishlist;
