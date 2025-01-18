import React from 'react'
import footerlogo from '../../assets/ggds 1.png'
import footerbg from '../../assets/banners1.png'
import footercards from '../../assets/large-preview 1.png'
import './Footer.css'
import { useMediaQuery } from '@mui/material'
const Footer = () => {
  const ismobile = useMediaQuery('(max-width:600px)')
  return (
    <div>
      <div className="main-footer" style={{
        // backgroundImage:`url(${footerbg})`,
        backgroundSize:'cover',
        
      }}>
        <div className="footer-top-box">
    
      <div style={{
        width:ismobile ? "":'350px'
      }}>
            <img src={footerlogo} alt="" />

            <p style={{
              // fontFamily:'Lato'
              paddingTop:'5px'
            }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia et ipsum tempora quam incidunt corporis repellendus praesentium accusamus porro vitae labore odit, asperiores expedita tempore.</p>
          </div>
          <div style={{
        position:'relative'
          }}>
            <h2>Quick <span>Links</span></h2>
            <p>
            <i class="ri-arrow-right-double-line"></i> Join OUr Family
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Contact Us
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Privacy Policy
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Case Study
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Blog
            </p>
            
          {/* <hr  style={{
            // position:'absolute',
            // top:"50%",
            // width:'100%',
            // right:"0"
          }}/> */}
          </div>
          <div>
            <h2>Our  <span>Services</span></h2>
            <p>
            <i class="ri-arrow-right-double-line"></i> Local Car Rentals
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Outstation Taxi
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> One way cabs
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Corporate Car Rental
            </p>
            <p>
            <i class="ri-arrow-right-double-line"></i> Airport Taxi
            </p>
          </div>
          {/* <hr /> */}
          <div>
            <h2>Contact  <span>Us</span></h2>
           <h6 style={{
            color:"#5A87FB",
            padding:'10px 0px',
            fontWeight:500
           }}>
            Call Us :
            <p>03366426642</p>
           </h6>
           <h6 style={{
            color:"#5A87FB",
            padding:'10px 0px',
            fontWeight:500
           }}>
            Email Us :
            <p>info@cabmate.com</p>
           </h6>
          </div>
      
        </div>

        <div className="footer-middle-box">
          <div className="footer-middle-box-line">

          </div>
          <div className="social-icons">
            <div >
            <i class="ri-facebook-line"></i>
            </div>
            <div>
            <i class="ri-twitter-x-fill"></i>
            </div>
            <div>
            <i class="ri-instagram-line"></i>
            </div>
            <div>
            <i class="ri-linkedin-line"></i>
            </div>
          </div>
        </div>

        <div className="footer-bottom-box">
          <img src={footercards} alt="" />

          <h3>Copy @ 2024 <span>Cab Mate </span> | All rights reserved</h3>
        </div>
      </div>
    </div>
  )
} 

export default Footer