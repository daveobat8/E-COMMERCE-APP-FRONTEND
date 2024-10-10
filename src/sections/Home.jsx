import React from 'react'
import Welcome from '../components/Welcome'
import About from './About'
import Contact from './Contact'

function Home() {
  return (
    <div>
        <Welcome />
        <About />
        <Contact />
    </div>
  )
}

export default Home