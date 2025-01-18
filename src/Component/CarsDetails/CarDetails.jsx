import React, { useState } from 'react'
import Banners from '../Banners/Banners'
import carimg from '../../assets/dgs 1.png'
import policehat from '../../assets/police-hat.png'
import fulepump from '../../assets/fuel-pump.png'
import taximg from '../../assets/tax.svg'
import './CarDetails.css'
import { colors, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
const CarDetails = () => {

    const ipad = useMediaQuery('(max-width:1024px)')
    const ismobile= useMediaQuery('(max-width:600px)')


    const [expandedCarIndex, setExpandedCarIndex] = useState(null); // Track the selected car index



const details_of_Car = [
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
    {
        img:'',
        name:'Wagon R',
        small_price:2302,
        save_price:230,
        main_price:2100,
        km_h:200,
        car_details:[
            {
                base_fare_1:'Base Fare for 200 km',
                base_fare_2:'Base Fare for 200 km',
                base_fare_3:'Base Fare for 200 km',
                base_fare_4:'Base Fare for 200 km',

            }
        ]
    },
]

const buttons = ["Inclusions", "Exclusions", "Facilities", "T&C"];



  const toggleExpand = (index) => {
    setExpandedCarIndex(index === expandedCarIndex ? null : index);
  };
  const [selectedIndex, setSelectedIndex] = useState(0);

//   const buttons = ["Inclusions", "Exclusions", "Facilities", "T&C"];



  return (
    
    <div>
        <Banners/>

        <div className="car-details-box" style={{
                width:ismobile ?'99%':"80%",
marginTop:'200px',


          backgroundColor:'white',
          margin:' auto',
                borderRadius:'20px',
                // padding:'20px',
                color:"black",
                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
                
        }}>
<div className="car-details-header" style={{
    backgroundColor:'#0E39A6',
    padding:ismobile ? '30px 0px':'0px 0px 10px 0px',
    borderTopRightRadius:'20px',
    borderTopLeftRadius:'20px'
}}>
    <h1 style={{
        fontWeight:900,
        fontSize:ismobile ? "25px":'40px',
        fontFamily:'Lato',
        textTransform:"uppercase",
        position:"relative",

        textAlign:'center',
        color:'white'
    }}>Courteous. <span style={{
// position:'absolute',
// top:'0'
fontWeight:100,
// marginBottom:'100px'
    }}>|</span>   Affordable. <span style={{
        fontWeight:100
    }}>|</span>  Reliable.</h1>
    <p style={{
        fontWeight:200,
        fontSize:'25px',
        textAlign:'center',
        color:'white'
    }}> That’s our Promise</p>
</div>
<div className="car-details-boxes" style={{
    // display:'flex',
padding:'20px'
}}>
    <div className="car-img-box" style={{
//         display:'flex',
// alignItems:'center',
// justifyContent:'space-between',
// height:'120px',
// border:'1px solid blue',
// borderRadius:'10px',
// padding:'10px 30px'
// padding:'40PX 0PX '
display:'flex',
flexDirection:'column',
gap:'30px'
    }}>
{
    details_of_Car.map((item,index)=>(
        <div key={index} style={{

            // borderTop:'2px solid blue',
            // borderBottom:'1px solid blue',
border:'1px solid #1444BD ',
    borderRadius:'20px'
}}>

<div style={
    {
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        height:ipad ? "":'120px',
        borderBottom:'1px solid blue',
        borderRadius:expandedCarIndex === index ?"":'20px',
        // backgroundColor:'red'
        flexDirection:ipad ?'column':'row'

    }
}>
<div style={{
        display:'flex',
        alignItems:'center',
        gap:'10px',
       justifyContent:'space-between',
    height:'100%',
    padding:'20px 60px 20px 20px',
    borderRight:ipad ?"":'2px solid blue'
      
      }}>
      <img src={carimg} style={{
            width:ismobile ? "":"100px",
            // height:'100%'
        }} alt="" />
        <div>
            <h3 style={{
                fontWeight:700,
                color:'black',
                fontSize:ismobile ? "20px":"",
                fontFamily:'Lato'
            }}>{item.name}</h3>
            <p style={{
                color:'black',
                fontFamily:'Lato'
            }}>
                or requivalent
                </p>
        </div>
      </div>
        <div className="car-details-middle-box" style={{
            // display:'flex',
            // alignItems:'center'
            display:'grid',
            gridTemplateColumns:ismobile ?"repeat(2,1fr)":ipad ? 'repeat(2,1fr)':'repeat(4,1fr)',
            // padding:'10px 30px',
            gap:ismobile ? '30px':ipad ?"20px ":"",
            padding:ipad ?'30px 0px':'30px'
           
        }}>
          <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center',
            // gap:'30px'
          }}>
          <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border:'1px solid #1444BD',
            width:'50px',
            height:'50px',
            borderRadius:'50%',
            color:"black"
          }}>
   {/* <i class="ri-spy-fill"></i> */}
   <img src={policehat} style={{
    width:'25px'
   }} alt="" />
   
            </div>
            <h4 style={{
                textAlign:'center',
                color:'black'
            }}>
                 Top Rated Cabs & Chauffeurs
            </h4>
          </div>
          <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            justifyContent:'center'
          }}>
          <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            border:'1px solid #1444BD',
            width:'50px',
            height:'50px',
            borderRadius:'50%'
          }}>
       <img src={taximg} style={{
    width:'25px'
   }} alt="" />
            </div>
            <h4 style={{
                textAlign:'center',
                color:'black'
            }}> Top Rated Cabs & Chauffeurs</h4>
          </div>
      

          <div style={{
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            flexDirection:'column'
          }}>

          <h2 style={{
                fontWeight:700,
                fontSize:'22px',
                color:'#00B55A',
                textAlign:'center'
            }}>
                 $ 2345</h2>
                 <h3 style={{
                fontWeight:600,
                fontSize:'16px',
                color:'#02819D',
                textAlign:'center'
            }}>
                save  $ 213</h3>
          </div>
          <div style={{
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            gap:ismobile ? '10px':''
          }}>
            <h1 style={{
                fontWeight:700,
                fontSize:'30px',
                color:'#FE9400',
                textAlign:'center'
            }}>$ 2132</h1>
            <p style={{
                fontWeight:600,
                fontSize:'16px',
                color:'#02819D',
                textAlign:'center'
            }}>
                up to 200 km</p>
            <div className="car-details-btns" style={{
                backgroundColor:'#2A9CD6',
                padding:'5px 20px',
                borderRadius:'5px',
                color:'white',
                width:'fit-content',
                textAlign:'center',
                cursor:'pointer'
            }} 
            onClick={() => toggleExpand(index)}
            >
                Details <i class="ri-arrow-down-s-line"></i>
            </div>
          </div>
        </div>
        <div className="car-details-bottom" style={{
            backgroundColor:'#1444BD',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            fontWeight:700,
            fontSize:'24px',
            color:'white',
            fontFamily:'Lato',
            textTransform:'uppercase',
            height:'100%',
width:ipad ?'100%':'300px',
borderTopRightRadius:  ipad ?"":'20px',
borderBottomRightRadius:expandedCarIndex === index ? "":  ismobile?"20px":'20px',
borderBottomLeftRadius:expandedCarIndex === index ?"":ipad ?"20px":''
        }}
       
        
        >
       <Link to={'/booking'}>
       select 
       </Link>
        </div>
</div>
    

{
    expandedCarIndex === index && (
       item.car_details.map((item1,index)=>(
        <div style={{
            padding:'20px',
        }}
        key={index}
        >
        <div className="details-wala-1" style={{
            // display :ipad ? 'grid':'flex'
            position:'relative'
        }}>
            <div className="btns" style={{
            display :ipad ? 'grid':'flex',
gridTemplateColumns:ipad ?'repeat(2,1fr)':'',
width:'100%',
paddingTop:ipad ? '50px':"",
            }}>
             {
                buttons.map((item,index)=>(
                    <div className="btns-btn" key={index}
                    
                    onClick={() => setSelectedIndex(index)}
                    style={{
                    //   padding: "10px",
                      cursor: "pointer",
                      textAlign: "center",
                    //   border: "1px solid #ccc",
                      borderRadius: "5px",
                      backgroundColor: selectedIndex === index ? "#1444BD" : "transparent",
                      color: selectedIndex === index ? "white" : "black",
                    }} 
                    
                    >
                    {item}
                    </div>
                ))
             }
              {/* <div className="btns-btn">
              Exclusions
              </div>
              <div className="btns-btn">
            Facilities
              </div>
              <div className="btns-btn">
              T&C
              </div> */}
            </div>
            <div className="cancel-btns" style={{
                position:ipad ? 'absolute':"",
top:'0px',
right:'0px',
boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
colors:'black',
backgroundColor:'white'

            }} 
            onClick={() => toggleExpand(index)}
        
            >
            <i class="ri-close-line"></i>
            </div>
        </div>
        <div className="details-wala-2" style={{
            display:ipad ? "grid":"flex",
            gridTemplateColumns:ismobile  ? 'repeat(1,1fr)':ipad ?'repeat(2,1fr)':""
        }}>
        
        <div className='details-wala-box'>
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
            }}>{item1.base_fare_2}</h3>
        </div>
        <div className='details-wala-box'>
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
                           <img src={fulepump} style={{
                        width:'22px'
                    }} alt="" />
            </div>
            <h3 style={{
                color:'black'
            }}>{item1.base_fare_1}</h3>
        </div>
        <div className='details-wala-box'>
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
        <div className='details-wala-box'>
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
        </div>
        </div>
       ))
    )
}



</div>

    ))
}






    </div>
</div>
        </div>
    </div>
  )
}

export default CarDetails