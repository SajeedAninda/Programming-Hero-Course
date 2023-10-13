import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const initialData = useLoaderData();
    const [data, setData] = useState(initialData);

    const handleRemove = (id) => {
        console.log(id);
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(deletedData => {
                console.log(deletedData);
                setData(data.filter(item => item._id !== id));
            });
    }

    return (
        <div>
            <h1>Total Users: {data.length}</h1>
            {data.map(item => (
                <p key={item._id}>
                    {item.name} : {item.email} 
                    <Link to={`/users/${item._id}`}><button>Update</button></Link>
                    <button onClick={() => handleRemove(item._id)}>X</button>
                </p>
            ))}
            <Link to={"/"}>Go back</Link>
        </div>
    );
};

export default Users;
