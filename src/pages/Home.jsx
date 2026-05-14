import React from 'react'
import Hero from '../components/Hero/Hero'
import Tools from '../components/Tools/Tools'
import Project from '../components/Project/Project'
import ContactCta from '../components/ContactCta/ContactCta'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Tools/>
      <Project/>
      <ContactCta/>
    </div>
  )
}

export default Home