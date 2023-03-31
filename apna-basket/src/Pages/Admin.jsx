import React from 'react'
import { AdminMainRoutes } from '../components/adminComponents/AdminMainRoutes'
import { AdminNavbar } from '../components/adminComponents/AdminNavbar'

export const Admin = () => {
  return (
    <div>
      <AdminNavbar/>
      <AdminMainRoutes/>
    </div>
  )
}
