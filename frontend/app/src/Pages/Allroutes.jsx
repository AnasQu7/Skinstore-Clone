import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Homepage'
import SkinCare from './SkinCare'
import HairCare from './HairCare'
import ProductPage from './ProductPage'
import Admin from './Admin'
export default function AllRoutes() {
  return (<Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/skincare' element={<SkinCare/>}/>
      <Route path='/haircare' element={<HairCare/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/Productpage' element={<ProductPage/>}/>
         </Routes>
    );
}
