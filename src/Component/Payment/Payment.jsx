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
import './Payment.css'
import { Link } from 'react-router-dom';

const Payment = () => {


    const ipad = useMediaQuery('(max-width:1024px)')
    const ismobile= useMediaQuery('(max-width:600px)')
    const [selectedIndex, setSelectedIndex] = useState(0)
    const [selectedCheckbox, setSelectedCheckbox] = useState(0)
    const buttons = ["Inclusions", "Exclusions",  "T&C"]
    

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

  const handleSubmit = async () => {
    try {
      const response = await axios.post('https://your-backend-url/api/booking', formData);
      alert('Form submitted successfully!');
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('Failed to submit the form. Please try again.');
    }
  };




//   const toggleExpand = (index) => {
//     setExpandedCarIndex(index === expandedCarIndex ? null : index);
//   };
const handleCheckboxClick = (index)=>{
setSelectedCheckbox(index)
}



const checkboxData = [
    {
      price:'2375',
      discount:'0'  
    },
    {
        price:'594',
        discount:'25'  
      },
      {
        price:'1187',
        discount:'50'  
      },
      {
        price:'2375',
        discount:'100'  
      },
]
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
         <Link to={'/car_details'}> <span>Select Car</span></Link>
          <span style={{ margin: '0 8px', color: '#ff0000' }}>➔</span>
        <Link to={'/booking'}>  <span>Booking</span></Link>
        </div>
        

        <div className="booking-main-box" style={{
            display:'flex',
            // backgroundColor:'red',
            width:'100%',
            padding:ipad ? "20px 10px":'100px 50px 0px 50px',
            gap:'30px',
            alignItems:'center',
            justifyContent:"center",
     
        }}>
     

   <div
   style={{
    //    width:'100%',
            gap:'60px',
            display:'flex',
            // backgroundColor:'red',
            padding:ipad ? '40px 0px 0px':'10px 0px 100px 0px',
            backgroundImage:`url(${bg_for_all})`,
            // width:'100%',
            backgroundPosition:'bottom',
            backgroundSize:'cover',
flexDirection:ipad ?'column':'row'

   }}
   >

{/* <div
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
   > */}
<div className="contact-page" style={{
            backgroundColor:'white',
            borderRadius:'20px',
            // width:'50%',
            height:'fit-content',
            boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',

          }}>

   <div className="contact-top-page" style={{
                backgroundColor:'#0E39A6',
                borderTopLeftRadius:'20px',
                borderTopRightRadius:'20px',
                padding:'10px 0',
                textAlign:'center'
            }}>
              <h1 style={{ fontWeight: 900, fontSize:ismobile?'20px': '35px', fontFamily: 'Lato',padding:ismobile?'5px':'' ,textTransform:'uppercase'}}>
                Payment details
              </h1>
            </div>



            <div
              className="contact-form"
              style={{ padding:ismobile?'30px 10px': '20px', backgroundColor: '#f8f9fa', borderRadius: '8px',
                // display:'flex',
                // // alignItems:'center',
                // flexDirection:'column',
                // justifyContent:'space-between'
               }}
            >




<div className="checkbox-btns" style=
{{
  display:'flex',
  alignItems:'center',
//   padding:'20px 0px ',
            justifyContent:'space-between',

  gap:'15px',
  flexWrap:'wrap'
   }}
>
      {/* {checkboxData.map((item,index) => (
        <div className='discount-checkbox'
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px",
            borderRadius: "10px",
          
            border: selectedCheckbox === index ? "2px solid blue" : "2px solid transparent",
            backgroundColor: selectedCheckbox === index ? "#1444BD" : "#E1EAFF",
            cursor: "pointer",
          }}
          onClick={() => handleCheckboxClick(index)}
        >
          <div
            style={{
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              border:selectedCheckbox === index ? '2px solid white': "2px solid #1444BD",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: selectedCheckbox === index ? "transparent" : "transparent",
            }}
          >
            {selectedCheckbox === index && (
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  display:'flex',
                  alignItems:'center',
                  justifyContent:'center'
                }}
              ></div>
            )}
          </div>
          <div>
            <h1 style={{
              color:selectedCheckbox === index ? 'white':'#0E39A6'
            }}>
              {item.discount}<span style={{
              color:selectedCheckbox === index ? 'white':'#0E39A6'

              }}>index[0]? "now":%</span>
            </h1>
            <h4 style={
              {
              color:selectedCheckbox === index ? 'white':'#002583'

              }
            }>
              ${item.price} <span style={{
              color:selectedCheckbox === index ? 'white':'#002583'

              }}>incex[0]?"later":'now"</span>
            </h4>
          </div>
        </div>
      ))} */}

{checkboxData.map((item, index) => (
  <div
    className="discount-checkbox"
    key={index}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent:'center',
      gap: "10px",
      padding: "10px",
      borderRadius: "10px",
      border: selectedCheckbox === index ? "2px solid blue" : "2px solid transparent",
      backgroundColor: selectedCheckbox === index ? "#1444BD" : "#E1EAFF",
      cursor: "pointer",
    }}
    onClick={() => handleCheckboxClick(index)}
  >
    <div
      style={{
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: selectedCheckbox === index ? "2px solid white" : "2px solid #1444BD",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {selectedCheckbox === index && (
        <div
          style={{
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "white",
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
          }}
        ></div>
      )}
    </div>
    <div>
      <h1
        style={{
          color: selectedCheckbox === index ? "white" : "#0E39A6",
        }}
      >
        {item.discount}{" "}
        <span
          style={{
            color: selectedCheckbox === index ? "white" : "#0E39A6",
          }}
        >
          {index === 0 ? "now" : "%"}
        </span>
      </h1>
      <h4
        style={{
          color: selectedCheckbox === index ? "white" : "#002583",
        }}
      >
        ${item.price}{" "}
        <span
          style={{
            color: selectedCheckbox === index ? "white" : "#002583",
          }}
        >
          {index === 0 ? "now" : "later"}
        </span>
      </h4>
    </div>
  </div>
))}

    </div>


    <p style={{
  color:'black',
  fontWeight:'500',
  fontSize:'15px',
  fontFamily:'Lato',
  padding:'30px 0px',
  textAlign:'center'
}}>You are one step away from booking a reliable cab</p>


<div className="payment-coupon-code" style={{
  display:'flex',
  // alignItems:'center',
  padding:'0px 0px 20px 0px'
}}>
  <input type="text" placeholder='Coupon Code' style={{
    width:'100%',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
padding:'10px 20px',
borderTopLeftRadius:'5px',
borderBottomLeftRadius:'5px',
color:'black',
fontFamily:'Lato',
outline:'none'
  }} />
  <div className="coupon-apply-btn" style={{
    padding:'10px 50px',
    borderTopRightRadius:'5px',
    borderLeftRightRadius:'5px',
    fontWeight:700,
    fontSize:"18px",
    backgroundColor:'#0E39A6',
    fontFamily:'Lato',
  }}>
    Apply
  </div>

            </div>



            <div style={{
  display:'flex',
  alignItems:'center',
  gap:'5px',
  padding:'20px '
}}>
<TextField 
    type='checkbox'
    style={{
      border:'none',

    }}
    sx={{
      "& .MuiOutlinedInput-root": {
        padding: "0",
        color:'red'
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: "none",
        borderRadius:'50%',
      },
    }}
    /> <h5 style={{
      fontWeight:500,
      fontSize:'16px',
      color:'#000000',
    fontFamily:'Lato',

    }}>I have a GST Number <span style={{
      fontWeight:'500',
      fontSize:'16px',
      color:'#959595',
    fontFamily:'Lato',

    }}> (Optional) </span></h5>
</div>

 
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
                  marginTop:'20px',
                  
                }}
              >
                Proceed
              </Button>
            
          
</div>
</div>

{/* </div> */}



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

export default Payment;
