import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';

const Users = () => {
    let users = useLoaderData();
    return (
        <div>
            <h1 className='text-5xl font-bold text-center'>Total User:{users.length}</h1>
            <div className='grid grid-cols-3 gap-6 mt-6'>
                {users.map(users => <User users={users}></User>)}
            </div>
        </div>
    );
};

export default Users;