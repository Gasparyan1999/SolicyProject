import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Info from './Components/Info'
import Main from './Components/Main'
import "./Style/App.scss"


export default function App() {
  return (
    <div className='app'>
      <div className='container'>
      <Header/>
      <Main/>
      <Footer/>
      </div>
      <Info/>
    </div>
  )
}
