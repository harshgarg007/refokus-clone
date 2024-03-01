import React from 'react'
import Navbar from './components/Navbar'
import Work from './components/Work'
import Stripes from './components/Stripes'
import Products from './components/Products'
import Marquees from './components/Marquees'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
// import AnimatedCursor from "react-animated-cursor"
import Cursor from './components/Cursor'

const App = () => {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full text-white font-["satoshi"] bg-zinc-900'>
     <Cursor/>
      <Navbar/>
      <Work/>
      <Stripes/>
      <Products/>
      <Marquees/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App