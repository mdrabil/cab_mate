import React from 'react'
import bannerimg from '../../assets/banners.png'
import { TextField, useMediaQuery } from '@mui/material'
import './Banners.css'
const Banners = () => {
    const ipad = useMediaQuery('(max-width:1024px)')
    const ismobile= useMediaQuery('(max-width:600px)')
  return (


    <div>

        <div className="banners-box" style={{
            backgroundImage:`url(${bannerimg})`,
            width:'100%',
            height:'309px',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            position:'relative',
            marginBottom:'120px',
            padding:ismobile ?'10px':"",
            display:'flex',
            alignItems:'center',

justifyContent:'center'
       
        }}>
{/* <img src={bannerimg} style={{
    width:'100%',
    height:ipad ?'200px' :''
}} alt="" /> */}



<div className="banner-box" style={{
    width:ismobile ?"100%":ipad ? "90%":"80%",
// left:ismobile ? "10px": ipad ? "5%":'10%',
// right:ismobile ? "10px":'10%',
// margin:'300px auto ',
color:"black",
borderRadius:'20px',
marginTop:'300px',
    // position:"absolute",
    backgroundColor:'white',
    // bottom:"-40%",
    padding:'20px',

    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 4px 12px',
    
}}>
    <h2 style={{
        fontSize:'16px',
        fontWeight:500,
        color:'black'
    }}>Home |
    Select Car
    </h2> 
<h1 style={{
    fontWeight:700,
    fontSize:ismobile ?"20px":'25px',
    color:'#171717'
}}>Bangalore <i class="ri-arrow-right-s-line"></i> Mysore (One way)</h1>
<div className="banners-form" style={{
    // display:'flex',
    // alignItems:'center',
    gap:'20px',
    padding:'20px 0px 0px',
    display:'grid',
    gridTemplateColumns:ismobile ?'repeat(1,1fr)':'repeat(3,1fr)'
}}>

          
       <TextField
       style={{
         fontWeight: 700,
         color: 'black', // Change font color to blue
        //  opacity:0.5
       }}
       label="Pick Up" // Label hamesha dikhayega
       placeholder="Select Date" // Placeholder input ke andar dikhayega
       variant="outlined" // Style ke liye variant
       fullWidth // Pura width lene ke liye
       InputLabelProps={{
         shrink: true, // Yeh ensure karega ki label hamesha top par rahe
       }}
       type="date" // This makes it a date picker
       InputProps={{
         style: { color: '' }, // Ensure the text inside the input is also blue
       }}
    //    size='medium'
     />
          
    
    
        
    
          <TextField
          style={{
            fontWeight:900
          }}
            label="Pickup Time" // Label hamesha dikhayega
            placeholder="06 -12-2024" // Placeholder input ke andar dikhayega
            variant="outlined" // Style ke liye variant
            fullWidth // Pura width lene ke liye
            InputLabelProps={{
                fontWeight: 900,
              shrink: true, // Yeh ensure karega ki label hamesha top par rahe
            }}
          type='time'
          />
          
          
    
    
        <div className="banners-btn" style={{
            backgroundColor:'#0E39A6',
            // height:'100%'
            // padding:'14px 30px',
            borderRadius:'8px',
            textAlign:'center',
            fontSize:'20px',
            display:'flex',
            alignItems:'center',
            justifyContent:'center',
            
            // width:'100px'
        }}>
            <span>Modify</span>
        </div>
</div>
        </div>
</div>




    </div>
  )
}

export default Banners