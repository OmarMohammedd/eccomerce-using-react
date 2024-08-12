import React, { useContext,useRef, useState } from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import { Swiper, SwiperSlide } from 'swiper/react';
import { CartContext } from '../../Context/Context';
import { useCart } from '../../Context/Context';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



function ProductDetails() {
  const navigate = useNavigate();

  const handleOpenDetails = (id) => {
    navigate(`/productdetails/${id}`);
  };
  


const products = [
  {
    id: 1,
    title: 'HAVIT HV-G92 Gamepad',
    image: '/image/items/item-1.png',
    price: '120',
  },
  {
    id: 2,
    title: 'AK-900 Wired Keyboard',
    image: '/image/items/item-2.png',
    price: '960',
  },
  {
    id: 3,
    title: 'IPS LCD Gaming Monitor',
    image: '/image/items/item-3.png',
    price: '370',
  },
  {
    id: 4,
    title: 'S-Series Comfort chair',
    image: '/image/items/item-4.png',
    price: '375',
  },
  {
    id: 100,
    title: 'The north coat',
    image: '/image/items/item-5.png',
    price: '260',
  },
  {
    id: 103,
    title: 'Gucci duffle bag',
    image: '/image/items/item-7.png',
    price: '960',
  },
  {
    id: 102,
    title: 'RGB liquid CPU Cooler',
    image: '/image/items/item-6.png',
    price: '160',
  },
  {
    id: 101,
    title: 'Small BookSelf',
    image: '/image/items/item-8.png',
    price: '120',
  },
  {
    id: 307,
    title: 'Breed Dry Dog Food',
    image: '/image/items/item-9.png',
    price: '100',
  },
  {
    id: 306,
    title: 'CANON EOS DSLR Camera',
    image: '/image/items/item-10.png',
    price: '360',
  },
  {
    id: 305,
    title: 'ASUS FHD Gaming Laptop',
    image: '/image/items/item-11.png',
    price: '700',
  },
  {
    id: 304,
    title: 'Curology Product Set',
    image: '/image/items/item-16.png',
    price: '500',
  },
  {
    id: 303,
    title: 'Kids Electric Car',
    image: '/image/items/item-12.png',
    price: '960',
  },
  {
    id: 302,
    title: 'Jr. Zoom Soccer Cleats',
    image: '/image/items/item-1.png',
    price: '1160',
  },
  {
    id: 301,
    title: 'GP11 Shooter USB Gamepad',
    image: '/image/items/item-14.png',
    price: '660',
  },
  {
    id: 300,
    title: 'Quilted Satin Jacket',
    image: '/image/items/item-15.png',
    price: '660',
  },
];

const { id } = useParams(); 

const product = products.find((item) => item.id === parseInt(id));

  const swiperRef = useRef(null);


  const [selectedSize, setSelectedSize] = useState('M');

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };
  

  const unitPrice = product.price; 
  const [quantity, setQuantity] = useState(2);

  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const totalPrice = (unitPrice * quantity).toFixed(2);

  const [mainImage, setMainImage] = useState(product.image);

  const handleImageClick = (src) => {
    setMainImage(src);
  };


  const { setCartItems } = useContext(CartContext);

  const handleAddToCart = (e) => {
    const button = e.currentTarget;
    const newItem = {
      id: button.getAttribute('data-id'),
      title: button.getAttribute('data-title'),
      image: button.getAttribute('data-image'),
      price: parseFloat(button.getAttribute('data-price')),
      quantity: 1, 
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


  const { addToWishlist } = useCart();

  const handleAddToWishlist = (e) => {
    const button = e.currentTarget.closest('.card');
    const newItem = {
      id: button.querySelector('.add_to_cart').getAttribute('data-id'),
      title: button.querySelector('.add_to_cart').getAttribute('data-title'),
      image: button.querySelector('.add_to_cart').getAttribute('data-image'),
      price: parseFloat(button.querySelector('.add_to_cart').getAttribute('data-price')),
    };
  
    addToWishlist(newItem);
  };


  


  return (
    <div>
  
      <Navbar/>

        <div className="section">
             <div className="container">
             <p className="paragraph_top">
             Account / Gaming /  <span>Havic HV G-92 Gamepad</span>
              </p>
              
              <div className="product_details">
              <div className="left_product_details">
              <div className='left'>
          <img src={product.image} alt="" onClick={() => handleImageClick(product.image)} />
          <img src={product.image} alt="" onClick={() => handleImageClick(product.image)} />
          <img src={product.image} alt="" onClick={() => handleImageClick(product.image)} />
          <img src={product.image} alt="" onClick={() => handleImageClick(product.image)} />
        </div>
        <div className='right'>
          <img src={mainImage} alt="" className="main-image" />
        </div>
    </div>
   <div className="right_product_details">
                        <h2>{product.title}</h2>

                        <div className='startss'>
                           <img src="/image/product_details/Four Star.png" alt="" />
                           <p style={{opacity:"0.5"}}>(150 Reviews)</p>
                           <p><img src="/image/product_details/Line 17.png" alt="" /></p>
                           <p style={{color:"#00FF66"}}>In Stock</p>
                        </div>

                        <p className="pricee">${totalPrice}</p>

                        <p className='playStation'>PlayStation 5 Controller Skin High quality vinyl with
                           air channel adhesive for easy bubble free install &
                            mess free removal Pressure sensitive.</p>

                        <hr className='hrr'/>
 
<div className="colors">
  <p>Colours :</p>
  <div className="labell">
    <input 
      type="radio" 
      className="check" 
      name="color" 
      defaultChecked
    />
    <input 
      type="radio" 
      className="checkk" 
      name="color" 
    />
  </div>
</div>

<div className="size">
      <p>Size:</p>
      <div className="xss">
        {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
          <div
            key={size}
            className={`xs ${selectedSize === size ? 'selected' : ''}`}
            onClick={() => handleSizeClick(size)}
          >
            {size}
          </div>
        ))}
      </div>
</div>

<div
  style={{
     display:"flex",
     alignItems:"center",
     marginTop:"2rem",
  }}
 >
  <div className="quantity-selector">
        <div className="minus-button" onClick={decrementQuantity}>
          <div className="minus-icon"></div>
        </div>
        <div className="quantity-display">
          <div>{quantity}</div>
        </div>
        <div className="plus-button" onClick={incrementQuantity}>
          <div className="">
             <img src="/image/product_details/icon-plus.png" alt="" />
          </div>
        </div>
      </div>
  
    <div >
        <button className='buynow'>Buy Now</button>
    </div>
    
<div className='heartt'>
      <img src="/image/product_details/Frame 904.png" alt="" />
  
</div>
</div>

<div className='botton_account'>
    <div className='botton_account_left'>
        <img src="/image/product_details/icon-delivery.png" alt="" />
        <div>
            <p>Free Delivery</p>
            <span>Enter your postal code for Delivery Availability</span>
        </div>
    </div>
    <hr/>
    <div className='botton_account_right'>
        <img src="/image/product_details/Icon-return.png" alt="" />
        <div>
            <p>Return Delivery</p>
            <div style={{display:"flex",gap:"0.3rem",alignItems:"center"}}>
              <span>Free 30 Days Delivery Returns. </span>
              <div className='details'>Details</div>
            </div>
        </div>
    </div>
</div>



                   </div>
              </div>
              
             </div>
        </div>
        
        <section className="section">
    <div className="container">
      <div className="section_category">
        <p className="section_category_p">Related Item</p>
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
            <img src="/image/items/item-1.png" alt="" className="card_img" />
            <div className="card_tag">-40%</div>
            <div className="card_top_icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="card_top_icon"
                onClick={handleAddToWishlist}
                style={{
                  cursor:"pointer"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="card_top_icon"
                onClick={() => handleOpenDetails(1)}
                style={{ cursor: 'pointer' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
              data-image="/image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>


        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="card">
          <div className="card_top">
            <img src="/image/items/item-2.png" alt="" className="card_img" />
            <div className="card_tag">-40%</div>
            <div className="card_top_icons">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="card_top_icon"
                onClick={handleAddToWishlist}
                style={{
                  cursor:"pointer"
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="card_top_icon"
                onClick={() => handleOpenDetails(2)}
                style={{ cursor: 'pointer' }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
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
                <img style={{width:"1.9rem"}} src="/image/Vector.png" alt="" />
              </div>
              <p className="card_rating_numbers">(75)</p>
            </div>
            <button
              className="add_to_cart"
              data-id="2"
              data-title="AK-900 Wired Keyboard"
              data-image="/image/items/item-2.png"
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
    <div className="card">
      <div className="card_top">
        <img src="/image/items/item-3.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(3)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
              data-image="/image/items/item-3.png"
              data-price="370"
              onClick={handleAddToCart}
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
        <img src="/image/items/item-4.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(4)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
            <img style={{width:"2rem"}} src="/image/star-half-filled.png" alt="" />

          </div>
          <p className="card_rating_numbers">(99)</p>
          <button
              className="add_to_cart"
              data-id="4"
              data-title="S-Series Comfort chair"
              data-image="/image/items/item-4.png"
              data-price="375"
              onClick={handleAddToCart}
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
        <img src="/image/items/item-1.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(1)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
              data-image="/image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
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
        <img src="/image/items/item-1.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(1)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
              data-image="/image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
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
        <img src="/image/items/item-1.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(1)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
              data-image="/image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
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
        <img src="/image/items/item-1.png" alt="" className="card_img" />
        <div className="card_tag">-40%</div>
        <div className="card_top_icons">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={handleAddToWishlist}
            style={{
              cursor:"pointer"
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="card_top_icon"
            onClick={() => handleOpenDetails(1)}
            style={{ cursor: 'pointer' }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
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
              data-image="/image/items/item-1.png"
              data-price="120"
              onClick={handleAddToCart}
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

      <Footer/>

    </div>
  )
}

export default ProductDetails