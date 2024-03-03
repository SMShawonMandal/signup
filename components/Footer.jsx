import React from 'react'
import { Link } from 'react-router-dom';



function Footer() {
    return (
        <>
            <div className='lg:h-[300px] bg-[#023047] py-10 justify-between grid lg:grid-cols-4 md:grid-cols-2 gap-4 lg:gap-0  grid-cols-2'>
                <div className='text-white flex flex-col gap-8 w-[40vw] justify-center items-center lg:w-[20vw] '>
                    <div>
                        <h2 className=' text-2xl'> Quick Links </h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/'> Home </Link>
                        <Link to='/'> About Us </Link>
                        <Link to='/'> Services </Link>
                        <Link to='/'> Contact Us </Link>
                        <Link to='/'> FAQ </Link>
                    </div>
                </div>
                <div className='text-white flex flex-col gap-8 w-[40vw] justify-start items-center lg:w-[20vw] '>
                    <div className=''>
                        <h2 className=' text-2xl'> Legal </h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/'> Privacy Policy </Link>
                        <Link to='/'> Terms of Services </Link>
                    </div>

                </div>
                <div className='text-white flex flex-col gap-8 w-[40vw] justify-start items-center lg:w-[20vw] '>
                    <div>
                        <h2 className=' text-2xl'> Follow Us </h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <Link to='/'> Facebook </Link>
                        <Link to='/'> Twitter </Link>
                        <Link to='/'> LinkedIn </Link>
                        <Link to='/'> Instagram </Link>
                    </div>
                </div>
                <div className='text-white flex flex-col gap-8 w-[40vw] justify-start items-center lg:w-[20vw] '>
                    <div>
                        <h2 className=' text-2xl'> VaxCentral </h2>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <div className='flex flex-row items-center '>
                            <p> vaxcentral.health@gmail.com</p>
                        </div>
                        <div className='flex flex-row items-center '>
                            <p> 01954495275</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer