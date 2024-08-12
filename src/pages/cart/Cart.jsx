import React, { useContext } from 'react';
import { NavLink } from "react-router-dom";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { CartContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';




function Cart() {

  const navigate = useNavigate();

  const handleProceedToCheckout = () => {
    navigate('/checkout');
  };

  const { cartItems, setCartItems } = useContext(CartContext);

  const handleQuantityChange = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };


  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <>
    <Navbar/>

  <section className="section">
    <div className="container">
    <div className="cart">
      <div className="cart_header"
          style={{
            boxShadow:"0px 1px 13px rgba(0, 0, 0, 0.05)",
            backgroundColor:"white"
         }}
      >
        <p className="cart_header_title">Product</p>
        <p className="cart_header_price">Price</p>
        <p className="cart_header_quantity">Quantity</p>
        <p className="cart_header_subtotal">Subtotal</p>
      </div>

      {cartItems.map((item, index) => (
        <div key={index} className="cart_item" 
          style={{
             display:"flex",
             alignItems:"center",
             justifyContent:"space-between",
             boxShadow:"0px 1px 13px rgba(0, 0, 0, 0.05)",
             backgroundColor:"white",
             flexWrap:"wrap"
          }}
         >
          <div
            style={{
               display:"flex",
               alignItems:"center",
               flex:"1"
            }}
          >
            <img src={item.image} alt={item.title} style={{ width: '80px'}} />
            <span style={{marginLeft:"1rem"}}>{item.title}</span>
          </div>
          <div
             style={{
              flex:"1"
           }}
          >${item.price}</div>
          <div
             style={{
              flex:"1"
           }}
          >
            <input
              type="number"
              value={item.quantity}
              min="1"
              onChange={(e) => handleQuantityChange(index, parseInt(e.target.value))}
              style={{ width: '60px', textAlign: 'center' }}
            />
          </div>
          <div>${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      ))}
       
        <div className='buttons'>
           <button>Return To Shop</button>
           <button>Update Cart</button>
        </div>

        <div className='card_buttom'>
           <div className='card_buttom_left'>
               <input type="text" placeholder='Coupon Code'/>
               <button>Apply Coupon</button>
           </div>
           <div className='card_buttom_right'>
             <h5>Cart Total</h5>
              <div
               style={{
                 marginTop:"2rem"
               }}
               >
                  <div
                   style={{
                     display:"flex",
                     alignItems:"center",
                     justifyContent:"space-between",
                     margin:"1rem 0"
                   }}
                  >
                      <p>Subtotal:</p>
                      <span><span>${calculateTotal()}</span></span>
                  </div>
                  <hr />
                  <div
                     style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"space-between",
                      margin:"1rem 0"
                    }}
                  >
                      <p>Shipping:</p>
                      <span>Free</span>
                  </div>
                  <hr />
                  <div
                     style={{
                      display:"flex",
                      alignItems:"center",
                      justifyContent:"space-between",
                      margin:"1rem 0"
                    }}
                  >
                      <p>Total:</p>
                      <span><span>${calculateTotal()}</span></span>
                  </div>
              </div>
              <button onClick={handleProceedToCheckout}>Proceed to checkout</button>
           </div>
        </div>

    </div>
    </div>
  </section>

    <Footer/>
</>

  )
}

export default Cart