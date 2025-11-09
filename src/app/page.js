"use client"
import React from 'react'
import Home from './home/page.jsx'
import Page2 from './components/pages/page2.jsx'
import Page3 from './components/pages/page3.jsx'
import Page4 from './components/pages/page4.jsx'
import TestimonialSection from './components/pages/TestimonialSection.jsx'
import ChromaGrid from './components/pages/ChromaGrid.jsx'
import CommunityHero from './components/pages/CommunityHero.jsx'
import AboutSection from './components/pages/AboutSection.jsx'
import ServicesSection from './components/pages/ServicesSection.jsx'
import PortfolioSection from './components/pages/PortfolioSection.jsx'
import WhyChooseUs from './components/pages/WhyChooseUs.jsx'
import CTASection from './components/pages/CTASection.jsx'
import TeamSection from './components/pages/TeamSection.jsx'
import BlogSection from './components/pages/BlogSection.jsx'
import FAQSection from './components/pages/FAQSection.jsx'
// import Footer from './components/footer/Footer.jsx'
const page = () => {
  return (
    
   <div className='bg-white w-full h-full'>
    <CommunityHero />
<AboutSection />
<ServicesSection />
{/* <Home /> */}
{/* <Page2 /> */}
{/* <Page3 /> */}
{/* <Page4 /> */}
{/* <ChromaGrid /> */}
<PortfolioSection />
<TeamSection />
<WhyChooseUs />
<TestimonialSection />
<CTASection />
<BlogSection />
<FAQSection />
   </div>
  
  )
}

export default page