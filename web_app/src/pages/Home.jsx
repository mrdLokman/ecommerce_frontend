import React from 'react'
import { Announcement, Navbar, Slider, CategoriesSection, ProductsSection, Newsletter, Footer } from '../components'


const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <CategoriesSection />
      <ProductsSection />
      <Newsletter />
      <Footer />
    </div>
    
  )
}

export default Home