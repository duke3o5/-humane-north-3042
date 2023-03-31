import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { AdminAddDataForm } from './AdminAddDataForm'
import { AdminDataList } from './AdminDataList'
import { AdminStats } from './AdminStats'

export const AdminMainRoutes = () => {
  return (
    <div>
       
        <Routes>
            <Route path='/productForm' element={<AdminAddDataForm/>}/>
            <Route path='/admin' element={<AdminDataList/>}/>
            <Route path='/stats' element={<AdminStats/>}/>
        </Routes>
    </div>
  )
}
