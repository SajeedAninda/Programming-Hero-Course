import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UsersDetails = () => {
    let userDetails = useLoaderData();
    let navigate=useNavigate();
    let handleGoBack=()=>{
        navigate(-1);
    }
    let { name, email, address, phone, website, company } = userDetails;
    return (
        <div className='w-2/3 mx-auto border-4 border-yellow-500 bg-slate-700 mt-12 p-6 text-white'>
            <h1>Name: {name}</h1>
            <h2>Email: {email}</h2>
            <h2>Address: {address.suite},{address.street}, {address.city}</h2>
            <h2>Phone: {phone}</h2>
            <h2>Website: {website}</h2>
            <h2>Company:{company.name}</h2>
            <button onClick={handleGoBack} className='py-2 px-3 bg-slate-950 text-white font-bold rounded-xl'>Go Back</button>
        </div>
    );
};

export default UsersDetails;