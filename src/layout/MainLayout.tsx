import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'
import Header from '../components/Header'

import { ScrollRestoration } from 'react-router-dom'

function MainLayout() {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}

export default MainLayout
