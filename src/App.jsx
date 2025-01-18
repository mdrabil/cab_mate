import React, { useEffect, useState } from 'react'

import Header from './Component/Header/Header'
import Header2 from './Component/Header2/Header2'
import { useMediaQuery } from '@mui/material'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import LoadingScreen from './Component/Loading/Loading'
import Footer from './Component/Footer/Footer';
import Banners from './Component/Banners/Banners';
import CarDetails from './Component/CarsDetails/CarDetails';
import Booking from './Component/Booking/Booking';
import Payment from './Component/Payment/Payment';
const App = () => {
const ismobile= useMediaQuery("(max-width:600px)");
const [loading, setLoading] = useState(true);
useEffect(() => {
  // Simulate data loading
  const timer = setTimeout(() => {
    setLoading(false); // Data loaded
  }, 100);

  return () => clearTimeout(timer); // Cleanup timer
}, []);

if (loading) {
  return <div><LoadingScreen/></div>; // Show loader during loading
}
  return (
   


<div>
  <BrowserRouter>
  {
  ismobile ?
<Header2/>
  :
  <Header/> 
}
<Routes>
<Route path='/booking' element={<Booking/>}></Route>
<Route path='/car_details' element={<CarDetails/>}></Route>
<Route path='/payment' element={<Payment/>}></Route>

  
</Routes>
{/* <Booking/> */}
{/* <Banners/> */}

{/* <CarDetails/> */}
<Footer/>
  </BrowserRouter>

</div>
  )
}

export default App