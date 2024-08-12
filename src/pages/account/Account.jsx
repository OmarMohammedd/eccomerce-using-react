import React from 'react'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

function Account() {
  return (
    <>
        <Navbar/>

            <div className="section">
                 <div className="container">
                     <div className='paragraph_top'
                      style={{
                        display:"flex",
                        alignItems:"center",
                        justifyContent:"space-between"
                      }}
                     >
                       <p>Home / <span>My Account</span></p>
                       <p style={{display:"flex",gap:"0.5rem"}}>Welcome! <p style={{color:"#DB4444"}}>Md Rimel</p></p>
                     </div>

                     <div className="content_account">
                         <div className="account_left">
                             <h4>Manage My Account</h4>
                             <p style={{marginTop:"2rem",color:"#DB4444"}}>My Profile</p>
                             <p>Address Book</p>
                             <p style={{marginBottom:"2rem"}}>My Payment Options</p>

                             <h4>My Orders</h4>
                             <p style={{marginTop:"2rem"}}>My Returns</p>
                             <p style={{marginBottom:"2rem"}}>My Cancellations</p>

                             <h4>My WishList</h4>
                         </div>
                         <div className="account_right">
                            <h3>Edit Your Profile</h3>
                            <div className='parent_inputs'>

                            <div className='top_parent_inputs'>
                                 <div className='inputss'>
                                     <label htmlFor="">First Name</label>
                                     <input type="text" placeholder='Md'/>
                                 </div>
                                 <div className='inputss'>
                                     <label htmlFor="">Last Name</label>
                                     <input type="text" placeholder='Rimel'/>
                                 </div>
                            </div>

                            <div className='top_parent_inputs'>
                                 <div className='inputss'>
                                     <label htmlFor="">Email</label>
                                     <input type="email" placeholder='rimel1111@gmail.com'/>
                                 </div>
                                 <div className='inputss'>
                                     <label htmlFor="">Address</label>
                                     <input type="text" placeholder='Kingston, 5236, United State'/>
                                 </div>
                            </div>

                               <div className='inputss'>
                                     <label htmlFor="">Password Changes</label>
                                     <input type="text" placeholder='Current Passwod'/>
                                 </div>

                                 <div className='inputss'>
                                     <input type="text" placeholder='New Passwod'/>
                                 </div>
                                 <div className='inputss'>
                                     <input type="text" placeholder='Confirm New Passwod'/>
                                 </div>

                                 <div className='account_right_bottom'>
                                     <p>Cancel</p>
                                     <button>Save Changes</button>
                                 </div>

                            </div>
                         </div>
                     </div>
                 </div>
            </div>

        <Footer/>

    </>
  )
}

export default Account