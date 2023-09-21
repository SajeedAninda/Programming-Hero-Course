import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReUsableForms from '../ReUsableForms'
// import MyComponent from '../Form'

function App() {
  
  let handleInputSubmit=(e)=>{
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;
    console.log(name,email);
}

  return (
    <>
      {/* <MyComponent></MyComponent> */}
      <ReUsableForms formTitle={"Register"} submitBtnText={"Register"} handleInputSubmit={handleInputSubmit}></ReUsableForms>
      <ReUsableForms formTitle={"Sign Up"} submitBtnText={"SignUp"} handleInputSubmit={handleInputSubmit}></ReUsableForms>
    </>
  )
}

export default App
