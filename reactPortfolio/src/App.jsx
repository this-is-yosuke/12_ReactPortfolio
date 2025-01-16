// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import './App.css'
import Landing from './components/landing'
import Footer from './components/Footer'
import Nav from './components/Nav'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
  <div>
    <Nav/>
    <Outlet />
    <Footer />
  </div>
  )
}
