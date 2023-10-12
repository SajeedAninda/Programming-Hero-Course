import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  let handleSubmit = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let users = { name, email };
    console.log(users);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      body: JSON.stringify(users),
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  }

  return (
    <>
      <h1>Hello</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='Type your name' /> <br /> <br />
        <input type="email" name='email' placeholder='Type your email' /> <br /> <br />
        <input type="submit" value="Add Value" />
      </form>
      <h2>See Users <Link to={"/users"}>Click</Link></h2>
    </>
  )
}

export default App
