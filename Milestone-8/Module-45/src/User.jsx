import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const User = ({ users }) => {
    let { name, email, username, id } = users;
    let navigate=useNavigate();
    let handleDetails=()=>{
        navigate(`/users/${id}`)
    }
    return (
        <div className='border-4 border-yellow-400 rounded-xl p-4 bg-slate-300'>
            <h2>Name: {name}</h2>
            <h2>Username: {username}</h2>
            <h2>Email: {email}</h2>
            <div className='text-center mt-3'>
                <Link to={`/users/${id}`}><button className='px-3 py-2 bg-slate-600 font-bold rounded-lg text-white'>Details</button></Link>
                <button onClick={handleDetails}>Click to see details</button>
            </div>
        </div>
    );
};

export default User;