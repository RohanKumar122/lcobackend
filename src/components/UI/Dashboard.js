import React from 'react'
import './Dashboard.css'
import NavBar from '../NavBar/NavBar'
import SideBar from '../SideBar/SideBar'
import DashbardContent from '../DasboardContent/DashbardContent'
import Footer from '../Footer/Footer'

export default function Dashboard() {
  return (
    <>
      <NavBar/>
      <div className='DasboardBody'>
      <SideBar/>
      <DashbardContent/>
      </div>
      <Footer/>
      
    </>
  )
}
