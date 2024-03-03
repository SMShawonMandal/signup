import React from 'react'
import { Link } from 'react-router-dom'
import { FiAlignJustify } from "react-icons/fi";

function Navbar() {
    return (
        <>
            <div className=' flex items-center px-10 justify-between lg:h-[147px] md:h-[100px] h-[80px] w-full bg-[#023047] '>
                <div>
                    <h1 className='text-white text-4xl font-semibold'> VaxCentral </h1>
                </div>
                <div className='lg:flex items-center gap-6 md:hidden hidden '>
                    <Link to='/' className='text-white hover:text-orange-400 text-xl'> Home </Link>
                    <Link to='/login' className='text-white hover:text-orange-400 text-xl'> Login </Link>
                    <Link to='/' className='text-white hover:text-orange-400 text-xl'> About </Link>
                    <Link to='/' className='text-white hover:text-orange-400 text-xl'> Contact </Link>
                    <Link to='/' className='text-white hover:text-orange-400 text-xl'> Check Eligibility </Link>
                    <Link to='/' className='text-white hover:text-orange-400 text-xl'> FAQ </Link>
                </div>
                <div className='flex lg:hidden md:flex'>
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1 text-white text-3xl"> <FiAlignJustify />
                        </div>
                        <ul tabIndex={0} className="dropdown-content z-50 menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/' className=' hover:text-orange-400 text-lg'> Home </Link></li>
                            <li><Link to='/login' className=' hover:text-orange-400 text-lg'> Login </Link></li>
                            <li><Link to='/' className=' hover:text-orange-400 text-lg'> About </Link></li>
                            <li> <Link to='/' className=' hover:text-orange-400 text-lg'> Contact </Link></li>
                            <li> <Link to='/' className=' hover:text-orange-400 text-lg'> Check Eligibility </Link></li>
                            <li><Link to='/' className=' hover:text-orange-400 text-lg'> FAQ </Link> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar