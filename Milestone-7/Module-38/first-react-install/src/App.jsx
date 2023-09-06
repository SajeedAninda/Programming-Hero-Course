import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <MyName></MyName>
    </>
  )
}
let MyName = () => {
  let firstName = "Sajeed";
  let lastName = "Aninda";
  let age = 23;
  return (
    <div>
      <h3>Hi i am {firstName}. My full name is {firstName} {lastName}. Very nice to meet you. I am {age} years old</h3>
    </div>
  )
}

export default App
