import React from 'react'
import Topbar from '../components/Topbar'
import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import About from '../components/About'
import Works from '../components/Works'
import Courses from '../components/Courses'
import Card from '../components/Card'
import Learning from '../components/Learning'
import Yourself from '../components/Yourself'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Topbar/>
      <Navbar/>
      <Feed/>
      <About/>
      <Works/>
      <Courses/>
      <Card/>
      <Learning/>
      <Yourself/>
      <Footer/>
    </div>
  )
}

export default Home
