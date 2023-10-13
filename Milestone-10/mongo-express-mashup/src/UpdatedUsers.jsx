import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UpdatedUsers = () => {
    const userData = useLoaderData();

    let handleUpdate = (e) => {
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let user = { name, email };
        fetch(`http://localhost:5000/users/${userData._id}`, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                'Content-type': 'application/json',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div>
            <h1>Updating user info of {userData.name}</h1>
            <form onSubmit={handleUpdate}>
                <input type="text" name='name' defaultValue={userData.name} /> <br /> <br />
                <input type="email" name='email' defaultValue={userData.email} /> <br /> <br />
                <input type="submit" value="Update Value" />
            </form>
        </div>
    );
};

export default UpdatedUsers;
