import React, { Component } from 'react'
import './App.css'
import Nav from './components/Navigation/Nav'
import ContactHeader from './components/ContactHeader/ContactHeader'
import ContactForm from './components/ContactForm/ContactForm'

const App = () => {
  return (
    <>
     <Nav />
     <ContactHeader />
     <ContactForm />
    </>
  )
}

export default App
