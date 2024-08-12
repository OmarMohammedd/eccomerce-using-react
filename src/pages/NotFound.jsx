import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function NotFound() {
  return (
    <div>
         <Navbar/>
         
         <div className="container">
            <p className='error_p'>Home / <span  style={{opacity:1}}> 404 Error</span></p>
         </div>

           <div className='section notfound'>
            <div className="container">
                <h1>404 Not Found</h1>
                <p>Your visited page not found. You may go home page.</p>
                <button className='btn'>Back to home page</button>
           </div>
           </div>
 
         <Footer/>
    </div>
  )
}

export default NotFound