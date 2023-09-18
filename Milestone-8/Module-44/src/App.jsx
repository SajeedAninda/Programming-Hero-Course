import { useState } from 'react';
import Lists from './Lists'
import Gym from './Gym'
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { RxCross1 } from 'react-icons/rx';
import GymCharts from './GymCharts';

function App() {
  let navbar = [
    { label: "Home", link: "/" },
    { label: "About Us", link: "/about" },
    { label: "Services", link: "/services" },
    { label: "Portfolio", link: "/portfolio" },
    { label: "Contact", link: "/contact" }
  ]
  let [open, setOpen] = useState(false);

  return (
    <div className=' bg-slate-800'>
      <div onClick={() => setOpen(!open)} className='md:hidden text-white text-4xl py-1 px-3'>
        {open === true ? <HiOutlineMenuAlt1></HiOutlineMenuAlt1> : <RxCross1></RxCross1>}
      </div>
      <ul className={`md:flex justify-center items-center text-3xl p-6 text-white gap-8 bg-slate-800 absolute md:static ml-8 md:ml-0 ${open ? 'hidden' : ''}`}>
        {navbar.map((list, idx) => <Lists key={idx} list={list}></Lists>)}
      </ul>
      <div className='bg-white py-8'>
      <Gym></Gym>
      </div>
      <div className='text-center bg-white'>
        <h1 className='text-slate-800 font-bold text-4xl'>Price Comparisons of Different Gyms:</h1>
        <GymCharts></GymCharts>
      </div>
    </div>
  )
}

export default App
