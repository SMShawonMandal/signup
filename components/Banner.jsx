import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom'
// import './styles.css';

import banner1 from '../src/assets/1.png'
import banner2 from '../src/assets/2.png'
import { Autoplay, Pagination } from 'swiper/modules';

const Banner = () => {

    return (
        <div className='h-screen'>
            <div className='flex  justify-center items-center bg-[#509FFC] h-full'>
                <div className='flex md:flex-row lg:flex-row flex-col justify-center items-center  m-10 md:gap-4 gap-4 lg:gap-32'>
                    <Swiper
                        autoplay={{
                            delay: 2500,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="rounded-2xl w-[320px] sm:w-[400px] lg:w-[600px] md:w-[400px] h-[320px] sm:h-[400px] md:h-[400px] lg:h-[600px] "
                    >
                        <SwiperSlide>
                            <img src={banner2} className='lg:h-[600px] md:h-[400px] ' />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={banner1} className='lg:h-[600px] md:h-[400px]' />
                        </SwiperSlide>
                    </Swiper>
                    <div className=' w-full lg:w-[50%] md:w-[40%] text-center text-wrap p-8 space-y-6 text-white'>
                        <h2 className=' text-2xl  font-bold text-center'>VaxCentral</h2>
                        <p className='text-center lg:max-w-[550px] pb-9 md:max-w-96 w-full text-balance'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem ad, facili, adipisicing elit. Quidem ad, facili.</p>
                        <Link to='/signup'>
                            <button className='btn'> Sign Up </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Banner