import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Outlet } from 'react-router-dom'

 function StandarLayoutNav() {
  return (
    <>
    <NavBar />
      <main>
        <Outlet></Outlet>
      </main>
    </>

  )
}
export default StandarLayoutNav