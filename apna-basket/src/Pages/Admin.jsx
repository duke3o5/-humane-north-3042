import React from 'react'
import { AdminAddDataForm } from '../components/adminComponents/AdminAddDataForm'
import { AdminCard } from '../components/adminComponents/AdminCard'
import { AdminDataList } from '../components/adminComponents/AdminDataList'

export const Admin = () => {
  return (
    <div>
      {/* <AdminAddDataForm/> */}
      <AdminDataList/>
    </div>
  )
}
