"use client"
import React from 'react'
import Home from './home/page.jsx'
import Page2 from './components/pages/page2.jsx'
import Page3 from './components/pages/page3.jsx'
import Page4 from './components/pages/page4.jsx'
// import Footer from './components/footer/Footer.jsx'
const page = () => {
  return (
    
   <div className='bg-white w-full h-full'>
<Home />
<Page2 />
<Page3 />
<Page4 />

   </div>
  
  )
}

export default page