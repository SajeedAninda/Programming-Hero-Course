import { FaCheck } from 'react-icons/fa';
export default function GymOptions({ options }) {
    let { name, features, price } = options;
    return (
        <div className="bg-blue-600 p-5 text-center space-y-2 rounded-xl flex flex-col ">
            <h2 className="text-white font-bold text-5xl">{name}</h2>
            <h3 className="text-white font-bold text-3xl">{price}/month</h3>
            {features.map(ftrs => <p className="text-lg font-bold text-white flex items-center justify-center gap-3 flex-grow"><span><FaCheck className='text-green-500'></FaCheck></span> {ftrs}</p>)}
            <button className='bg-white px-4 py-3 rounded-xl font-bold'>Purchase</button>
        </div>
    )
}