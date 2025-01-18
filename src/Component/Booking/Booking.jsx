import React, { useState } from 'react';
import booking_banner from '../../assets/booking-banner.jpg';
import { FormControl, InputAdornment, MenuItem, TextField, Button, Box, useMediaQuery } from '@mui/material';
import { Person, Email, LocationOn, Phone } from '@mui/icons-material';
import fulepump from '../../assets/fuel-pump.png'
import cardrive from '../../assets/car.svg'
import banknotes from '../../assets/banknotes.svg'
import moneycash from '../../assets/money.svg'
import bg_for_all from '../../assets/bg_for_all.png'

// import mailimg from '../../assets/mail.svg'
import axios from 'axios';
import './Booking.css'
import { useNavigate } from 'react-router-dom';
const Booking = () => {


    const ipad = useMediaQuery('(max-width:1024px)')
    const ismobile= useMediaQuery('(max-width:600px)')


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91', // Default country code
    pickup: '',
    drop: '',
  });

  const countries = [
    { code: '+91', name: 'India' },
    { code: '+1', name: 'USA' },
    { code: '+44', name: 'UK' },
    { code: '+61', name: 'Australia' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const navigate = useNavigate()

  const handleSubmit = async () => {
    navigate('/payment')
    try {
      const response = await axios.post('https://your-backend-url/api/booking', formData);
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      // alert('Failed to submit the form. Please try again.');
    }
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
const buttons = ["Inclusions", "Exclusions",  "T&C"];



//   const toggleExpand = (index) => {
//     setExpandedCarIndex(index === expandedCarIndex ? null : index);
//   };

  return (
    <div>
      <div className="booking-box">
        <div
          className="booking-main-img"
          style={{
            backgroundImage: `url(${booking_banner})`,
            backgroundSize: 'cover',
            width: '100%',
            height: '400px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '20px',
            color: '#fff',
            fontSize: '20px',
            fontWeight: 'bold',
          }}
        >
          <span>Home</span>
          <span style={{ margin: '0 8px', color: '#ff0000' }}>➔</span>
          <span>Select Car</span>
          <span style={{ margin: '0 8px', color: '#ff0000' }}>➔</span>
          <span>Booking</span>
        </div>

        <div className="booking-main-box" style={{
            // display:'flex',
            // backgroundColor:'red',
            width:'100%',
            padding:ipad ? "20px 10px":'100px 100px 0px 100px',
            gap:'30px'
        }}>
     

   <div
   style={{
    //    width:'100%',
            gap:'30px',
            display:'flex',
            // backgroundColor:'red',
            // alignItems:'center',
            padding:'0px 0px 100px 0px',
            justifyContent:"space-between",
            backgroundImage:`url(${bg_for_all})`,
            width:'100%',
            backgroundPosition:'bottom',
            backgroundSize:'cover',
flexDirection:ipad ?'column':'row'

   }}
   >
   <div className="contact-page" style={{
            backgroundColor:'white',
            borderRadius:'20px',
            // width:'50%',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',

          }}>
            <div className="contact-top-page" style={{
                backgroundColor:'#0E39A6',
                borderTopLeftRadius:'20px',
                borderTopRightRadius:'20px',
                padding:'10px 0',
                textAlign:'center'
            }}>
              <h1 style={{ fontWeight: 900, fontSize:ismobile?'20px': '35px', fontFamily: 'Lato',padding:ismobile?'5px':'' }}>
                CONTACT & PICKUP DETAILS
              </h1>
            </div>
            <div
              className="contact-form"
              style={{ padding:ismobile?'30px 10px': '40px', backgroundColor: '#f8f9fa', borderRadius: '8px',
                // display:'flex',
                // // alignItems:'center',
                // flexDirection:'column',
                // justifyContent:'space-between'
               }}
            >
     

<TextField
  name="name"
  label="Name"
  placeholder="Enter your name"
  variant="outlined"
  fullWidth
  value={formData.name}
  onChange={handleChange}
  style={{ marginBottom:ismobile ?"20px": '30px' }}
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
{/* <Person style={{ fill: 'red !important', fontSize: '24px' }} /> */}
<i class="ri-user-3-fill"></i>
      </InputAdornment>
    ),
  }}
/>



              {/* Email Field */}
              <TextField
                name="email"
                label="Email"
                placeholder="Enter your email address"
                variant="outlined"
                fullWidth
                value={formData.email}
                onChange={handleChange}
                style={{ marginBottom:ismobile ?"20px": '30px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <Email style={{ color: '#2196f3' }} /> */}
                      {/* <svg id="Layer_1" enable-background="new 0 0 100 100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="m57.7733727 50.5431252 35.4241905-31.7698879c-1.0838776-.6322575-2.3154221-.9672871-3.5702209-.9712467h-79.2545529c-1.2548466.0039425-2.4864292.3389702-3.5703487.9712467l35.4241829 31.7698879c4.3690032 4.1058311 11.1777496 4.1058311 15.5467491 0z"/><path d="m96.2223587 21.8354092-27.5458069 24.70434 27.7472 31.2516632c.7110672-1.3789749 1.080162-2.9087067 1.0761719-4.4602203v-46.6623803c.0068283-1.6954784-.4338684-3.3627358-1.277565-4.8334026z"/><path d="m3.7776465 21.8354092c-.8436446 1.4706898-1.2843318 3.1379318-1.2775686 4.8334026v46.6623802c-.003998 1.5514908.3650985 3.081192 1.076169 4.4601517l27.7472051-31.2515946z"/><path d="m60.272068 54.0771713c-5.7736664 5.4249001-14.7704697 5.4249001-20.5441399 0l-5.2464485-4.7052269-28.0689492 31.613842c1.1721191.7848053 2.5496745 1.2064667 3.960259 1.2122269h79.2545471c1.4105377-.0057297 2.7880554-.4273758 3.9601288-1.2121506l-28.0689411-31.6139183z"/> */}
                      {/* <img src={mailimg} alt="not found" />  */}
                      <i class="ri-mail-send-fill"></i>
                      {/* </svg> */}
                    </InputAdornment>
                  ),
                }}
              />

              {/* Phone Number with Country Code */}
    
              <TextField
      name="phone"
      placeholder="Enter your phone number"
      variant="outlined"
      fullWidth
      value={formData.phone}
      style={{ marginBottom:ismobile ?"20px": '30px' }}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <TextField
              select
              name="countryCode"
              value={formData.countryCode}
              onChange={handleChange}
              variant="outlined"
              style={{
                border: "none",
                padding: "0",
                // color:'red'
                // backgroundColor:"red"
                // width: "80px", // Adjust width as needed
              }}
              SelectProps={{
                style: {
                  padding: "0",
                //   backgroundColor:'red'
                },
              }}
            >
              {countries.map((country) => (
                <MenuItem style={{
                //   width:'100px',
                  backgroundColor:'#0E39A6',
                //   padding:'0'
                }} key={country.code} value={country.code}>
                 {country.name} {country.code}
                </MenuItem>
              ))}
            </TextField>
          </InputAdornment>
        ),
      }}
      sx={{
        "& .MuiOutlinedInput-root": {
          padding: "0",
        },
        "& .MuiOutlinedInput-notchedOutline": {
        //   border: "none",
        },
      }}
    />
              

              {/* Pickup Address */}
              <TextField
                name="pickup"
                label="Pickup Address"
                placeholder="Enter your pickup address"
                variant="outlined"
                fullWidth
                value={formData.pickup}
                onChange={handleChange}
                style={{ marginBottom:ismobile ?"20px": '30px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <LocationOn style={{ color: '#ff9800' }} /> */}

                      <i class="ri-map-pin-2-fill"></i>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Drop Address */}
              <TextField
                name="drop"
                label="Drop Address"
                placeholder="Enter your drop address"
                variant="outlined"
                fullWidth
                value={formData.drop}
                onChange={handleChange}
                style={{ marginBottom:ismobile ?"20px": '30px' }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {/* <LocationOn style={{ color: '#ff9800' }} /> */}
                      <i class="ri-run-fill"></i>
                    </InputAdornment>
                  ),
                }}
              />

              {/* Submit Button */}
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleSubmit}
                style={{
                  backgroundColor: '#1444BD',
                  color: '#fff',
                  fontWeight: 700,
                  fontSize:'20px',
                  fontFamily:'Lato',
                  textTransform:'uppercase',
                  padding: '10px 20px',
                }}
              >
                Proceed
              </Button>
            </div>
          </div>

          <div style={{
         display:'grid',
         gap:'20px'
          }}>

           <Box sx={{
            backgroundColor:'white',
            color:'black',
            borderRadius:'20px',
            // width:'500px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',

           }}>
           <div className="booking-details-page" style={{
            backgroundColor:'#0E39A6',
            textAlign:'center',
            padding:'10px 0px',
            borderTopLeftRadius:'20px',
            borderTopRightRadius:'20px',

           }}>
                <h2 style={{
                    fontWeight:900,
                    fontSize:'18px'
                }}>YOUR BOOKING DETAILS</h2>

            </div>
            <div className='booking-details-show'>
                <div className='booking-details-show-box'>
                    <h2>Itinerary :
                        </h2>
                        <span>banglore to Mysore</span>
                </div>
                <hr />
                <div className='booking-details-show-box'>
<h2>                    Pickup Date :

     </h2>
     <span>7th December 2024 at 7:00 AM</span>
                </div>
            <hr />
                <div className='booking-details-show-box'>
<h2>                    Car Type:
     </h2>
     <span>Wagon R or Equivalent</span>
                </div>
                <hr />
                <div className='booking-details-show-box'>
  <h2>                  KMs Inclided:
     </h2>
     <span>145km</span>
                </div>
                <hr />
                <div className='booking-details-show-box'>
               <h2> Total Fare :
                 </h2>
                 <span>$ 2358</span>
                </div>
            </div>
           </Box>

           <Box sx={{
            backgroundColor:'white',
            borderRadius:'20px',
            padding:'20px',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',

           }}>
           <div className="btns" style={{
            // display :ipad ? 'grid':'flex',
// gridTemplateColumns:ipad ?'repeat(2,1fr)':'',
// width:'100%',
// paddingTop:ipad ? '50px':"",
display:'flex',
flexDirection:ipad ?'column':'row',
alignItems:"center",
justifyContent:'space-between',
gap:'10px',
// width:'500px'

            }}>
             {
                buttons.map((item,index)=>(
                    <div className="" key={index}
                    
                    onClick={() => setSelectedIndex(index)}
                    style={{
                      padding: "10px 40px",
                      cursor: "pointer",
                      textAlign: "center",
                      width:'100%',
                boxShadow: 'rgba(0, 0, 0, 0.23) 0px 4px 12px',

                      borderBottom: "1px solid #0E39A6",
                      borderRadius: "10px",
                      fontWeight:700,
                      backgroundColor: selectedIndex === index ? "#1444BD" : "transparent",
                      color: selectedIndex === index ? "white" : "black",
                    }} 
                    
                    >
                    {item}
                    </div>
                  
                ))
             }
  
            </div>



               <div className="" style={{
                paddingTop:'20px'
                        // display:ipad ? "grid":"flex",
                        // display:'grid',
                        // gap:'10px'
                        // gridTemplateColumns:ismobile  ? 'repeat(1,1fr)':"repeat(4,1fr)"
                    }}>
                    
                    <div className='booking_details_page'>
                    <div style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                border:'1px solid #1444BD',
                                width:'40px',
                                height:'40px',
                                borderRadius:'50%',
                                backgroundColor:'1444bd18'
                              }}>
                                {/* <i class="ri-oil-fill"></i> */}
                                <img src={fulepump} style={{
                                    width:'22px'
                                }} alt="" />
                        </div>
                        <h3 style={{
                            color:'black'
                        }}>Base Fare for 200 km</h3>
                    </div>
                    <div className='booking_details_page'>
                    <div style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                border:'1px solid #1444BD',
                                width:'40px',
                                height:'40px',
                                borderRadius:'50%',
                                backgroundColor:'1444bd18',
            
                              }}>
                                       <img src={cardrive} style={{
                                    width:'22px'
                                }} alt="" />
                        </div>
                        <h3 style={{
                            color:'black'
                        }}>Driver Allowance</h3>
                    </div>
                    <div className='booking_details_page'>
                    <div style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                border:'1px solid #1444BD',
                                width:'40px',
                                height:'40px',
                                borderRadius:'50%',
                                backgroundColor:'1444bd18'
                              }}>
                                      <img src={banknotes} style={{
                                    width:'22px'
                                }} alt="" />
                        </div>
                        <h3 style={{
                            color:'black'
                        }}>State Tax & Toll</h3>
                    </div>
                    <div className='booking_details_page'>
                    <div style={{
                                display:'flex',
                                alignItems:'center',
                                justifyContent:'center',
                                border:'1px solid #1444BD',
                                width:'40px',
                                height:'40px',
                                borderRadius:'50%',
                                backgroundColor:'1444bd18'
                              }}>
                                       <img src={moneycash} style={{
                                    width:'22px'
                                }} alt="" />
                        </div>
                        <h3 style={{
                            color:'black'
                        }}>GST (6%)</h3>
                    </div>
                    </div>
           </Box>
          </div>
   </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
