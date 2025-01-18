import React, { useEffect, useState } from 'react'
import img from '../../assets/ldddgh 1.svg'

import discoundimg from '../../assets/discount.png'
import mobileimg from '../../assets/download.png'
import travelcarimg from '../../assets/schedule.png'
import roadimg from '../../assets/road.png'
import './Header.css'
import { useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import { countrydata } from './countrydata'
const Header = () => {
const isres = useMediaQuery("(max-width:1475px)");
const [isopennavbar,setIsOpenNavbar] = useState(false)
const [selected, setSelected] = useState(countrydata[0]); // Default to the first item
const [isOpen, setIsOpen] = useState(false);

const handleSelect = (item) => {
  setSelected(item);
  setIsOpen(false);
};

// const [isOpen, setIsOpen] = useState(false);
// const images = [
//   `${imgright}`,
//   `${imgright}`,
//   `${imgright}`,
//   `${imgright}`,
//   `${imgright}`,

// ]; 


  return (
    <div>
        <header>
         <div className="color-header" style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'space-between',
          padding:'0px 75px'
         }} >
<div style={{
  display:'flex',
  alignItems:'center',
  // width:'100%',
  gap:'10px'
}}>
<i class="ri-mail-fill"></i> <span>  info@cabmate.com</span>
<hr style={{
  width:'20px',
  transform:'rotate(90deg)'
}}/>
<i class="ri-phone-fill"></i> <span>{import.meta.env.VITE_PHONE}</span>
</div >
<div >
  {/* <select style={{ padding: '5px', fontSize: '14px',backgroundColor:'transparent',border:'none',outline:'none' }}>
    {countrydata.map((items, index) => (
      <option key={index} value={items.flag} style={{
        backgroundColor:'#2B9AE6',
       
      }}>
        <img src={items.flag} style={{ width: '20px' }} alt="" />
        {items.name} ( {items.currency_symbol} )
      </option>
    ))}
  </select> */}
  <div style={{ position: "relative", width: "200px" }}>
      {/* Dropdown button */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: "10px",
          gap:'20px',
          backgroundColor: "transparent",
          // border: "1px solid #ccc",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <img
            src={selected.flag}
            alt=""
            style={{ width: "20px", height: "15px", borderRadius: "2px" }}
          />
          <span>
            {selected.name.slice(0,3)} ({selected.currency_symbol})
          </span>
        </div>
        <span style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
          ▼
        </span>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "100%",
            backgroundColor: "red",
            border: "1px solid #ccc",
            borderRadius: "5px",
            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
            zIndex: 1000,
            // maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {countrydata.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px",
                cursor: "pointer",
                gap: "10px",
                backgroundColor:
                  selected.name === item.name ? "#0D0A23" : "#021D61",
              }}
              onClick={() => handleSelect(item)}
            >
              <img
                src={item.flag}
                alt=""
                style={{ width: "20px", height: "15px", borderRadius: "2px" }}
              />
              <span>
                {item.name} ({item.currency_symbol})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
</div>


         </div>
         <div className="header-navbar">
         <div className="logo">
            
            <Link to={'/'}>
            <img src={img} alt="" />
            </Link>
        </div>
    
        <div className="navbar-center" style={{
          fontSize: isres ? '10px':'14px'
        }}>
              
           <div className='header-navbar-icons'
           >
           <img src={discoundimg}  alt="" />
            <span>
                Special Offers
              </span>
           </div>
        
           <div className='header-navbar-icons'
           >
      <div className="header-navbar-icons-box">
      <img src={mobileimg}  alt="" />
      </div>
            <span>
                Download App
              </span>
           </div>



           <div className='header-navbar-icons'
           >
      <div className="header-navbar-icons-box">
      <img src={travelcarimg}  alt="" />
      </div>
            <span>
                Travel Agent?
              </span>
           </div>

     <div className='header-navbar-icons'
           >
      <div className="header-navbar-icons-box">
      <img src={roadimg}  alt="" />
      </div>
            <span>
              Cab Mate Blog
              </span>
           </div>
        
      
        
  
        <div className="header-right">
    <div className="header-btn">
          Login or Signup
        </div>
     
        </div>

        </div> 
         </div>
        </header>
    </div>
  )
}

export default Header