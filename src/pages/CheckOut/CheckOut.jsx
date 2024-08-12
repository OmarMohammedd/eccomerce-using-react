import React, { useContext, useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { CartContext } from '../../Context/Context'; 


function CheckOut() {

  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(prevState => !prevState);
  };

  const [isCheckedd, setIsCheckedd] = useState(null);

  const handleTogglee = (value) => {
    setIsCheckedd(value);
  };

  const { cartItems } = useContext(CartContext);
  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);





  return (
    <div>
      <Navbar />

      <div className="section">
        <div className="container checkout">
            <p className="paragraph_top">
              Account / My Account / Product / View Cart / <span>CheckOut</span>
            </p>
            <h1>Billing Details</h1>
            <div className="parent_checkout">
              <div className="checkout_left">
                 
                 <div>
                    <label htmlFor="">First Name <span>*</span></label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Company Name</label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Street Address <span>*</span></label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Apartment, floor, etc. (optional)</label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Town/City <span>*</span></label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Phone Number <span>*</span></label>
                    <input type="text" />
                 </div>
                 <div>
                    <label htmlFor="">Email Address <span>*</span></label>
                    <input type="text" />
                 </div>
              
                 <span className="label">
                 <input 
        type="checkbox" 
        checked={isChecked} 
        onChange={handleToggle} 
        name="sameadr" 
        className={`custom-checkbox ${isChecked ? 'checked' : ''}`}
      />
      <p onClick={handleToggle}>Save this information for faster check-out next time</p>
    </span>
                 
              </div>
              
              <div className="checkout_right">

              {cartItems.map((item, index) => (
            <div key={index} className="checkout_right_child">
              <div>
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
              </div>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        <div className="checkout_right_child">
            <p>Subtotal:</p>
            <span>${subtotal}</span>
          </div>
          <hr />
          <div className="checkout_right_child">
            <p>Shipping:</p>
            <span>Free</span>
          </div>
          <hr />
          <div className="checkout_right_child">
            <p>Total:</p>
            <span>${subtotal}</span>
          </div>

                   <div className="labell labelll">
<div 
 style={{
  display:"flex",
  alignItems:"center",
  gap:"1.5rem",
 }}
>
    <input 
      type="radio" 
      id="bank" 
      name="payment" 
      checked={isCheckedd === 'bank'} 
      onChange={() => handleTogglee('bank')} 
      className="custom-checkboxx" 
    />
    <label htmlFor="bank" onClick={() => handleTogglee('bank')}>Bank</label>
</div>

  <div>
    <img src="./image/Frame 834.png" alt="" />
  </div>
</div>

<div className="labell">
  <input 
    type="radio" 
    id="cash" 
    name="payment" 
    checked={isCheckedd === 'cash'} 
    onChange={() => handleTogglee('cash')} 
    className="custom-checkboxx" 
  />
  <label htmlFor="cash" onClick={() => handleTogglee('cash')}>Cash on delivery</label>
</div>

<div className="checkout_right_bottom">
   <input type="text" placeholder="Coupon Code"/>
   <button>Apply Coupon</button>
</div>

<button className="buttonn">Place Order</button>


              </div>
            </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CheckOut;
