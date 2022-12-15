import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HairCare from './HairCare'
import Homepage from './Homepage'
import SkinCare from './SkinCare'
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/skincare" element={<SkinCare/>}/>
        <Route path="/haircare" element={<HairCare/>}/>
    </Routes>
  )
}

export default AllRoutes