import { useState } from 'react'
import './App.css'
import Nav from "./component/Nav"
import Header from './component/Header'
import Classes from './component/Classes'
import Bmi from './component/Bmi'
import Trainers from './component/Trainers'
import Services from './component/Services'
import Review from './component/Review'
import Contact from './component/Contact'
import Footer from './component/Footer'

function App() {
  

  return (
    <>
      <Nav />
      <Header/>
      <Classes/>
      <Bmi/>
      <Trainers/>
      <Services/>
      <Review/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
