import React from 'react'
import './Home.css'
import { Box, TextField, useMediaQuery } from '@mui/material';
import homeimg from '../../assets/image 91.jpg'
const Home = () => {

const isMobile = useMediaQuery("(max-width:600px)");


  return (
    <div>
        <section className="home"
         style={{
      
        }}
        >

<div className="home-center-box">

<div className="home-center-top-box">
<div className='home-btns'>
<span>one way</span>
</div>
</div>


<div className="home-form-center-box">
  <div>
  <i class="ri-arrow-left-right-fill"></i>
  </div>
     <div style={{ margin: '20px' }}>
      <TextField
        label="Your Name" // Label hamesha dikhayega
        placeholder="Enter your name" // Placeholder input ke andar dikhayega
        variant="outlined" // Style ke liye variant
        fullWidth // Pura width lene ke liye
        InputLabelProps={{
          shrink: true, // Yeh ensure karega ki label hamesha top par rahe
        }}
      
      />

    </div>
</div>








</div>
     
        </section>

    </div>
  )
}

export default Home