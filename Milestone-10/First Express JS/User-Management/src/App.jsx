import { useEffect, useState } from 'react';
import './App.css';

function App() {
  let [users, setUsers] = useState([])
  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  let handleForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let email = e.target.email.value;
    let user = { name, email };
    fetch("http://localhost:5000/users", {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then(data => {
        console.log(data);
        let newUsers = [...users, data];
        setUsers(newUsers);
        e.target.reset();
      })
  }


  return (
    <>
      <h1>User Management System User: {users.length}</h1>
      <form onSubmit={handleForm}>
        <input type="text" name='name' placeholder='Input Your Name' /> <br /> <br />
        <input type="email" name="email" id="" placeholder='Input Your Email' /> <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {
          users.map(user => <p key={user.id}>{user.id} : {user.name} : {user.email}</p>)
        }
      </div>
    </>
  )
}

export default App
