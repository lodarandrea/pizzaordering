import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'
import bg from '../img/bg.jpg'

function MainLayout() {
  return (
    <div
      className="w-full"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundColor: 'grey',
        backgroundBlendMode: 'multiply',
        backgroundAttachment: 'scroll',
      }}
    >
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout
