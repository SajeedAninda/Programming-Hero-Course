import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      <Sisters name="Sanjeeda Enayet Ananna" age={17} height="4'11''" clgName="Noor Mohammad" weight={53}></Sisters>
      <Sisters name="Tasmiyah Enayet Arthi" age={12} height="5'04''" clgName="Girls Ideal" weight={42}></Sisters>
      <Sisters></Sisters>
    </>
  )
}

let Sisters =({name="",age=0,height=0,clgName="",weight=0}) =>{
  let sistersStyle={
    border: "2px solid red",
    fontSize:"18px",
    borderRadius:"20px",
    padding:"20px",
    marginTop:"15px",
    width:"650px"
  }
  return (
    <div style={sistersStyle}>
    <h2>Name: {name}</h2>
    <h2>Age: {age}</h2>
    <h2>Height: {height}</h2>
    <h2>Instituition Name: {clgName}</h2>
    <h2>Weight: {weight}</h2>

    </div>
    )
}

export default App

// http://localhost:5173/