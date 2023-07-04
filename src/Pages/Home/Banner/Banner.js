import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <>
            <div className='banner-img w-full h-screen tracking-wider  text-white img flex justify-center items-center'>
                <div className='text-lg pb-24 md:pb-18 md:text-4xl font-medium italic'>
                    <h1 className='leading-normal'>Discover Automotive Excellence</h1>
                    <h1 className='leading-normal'>Where Performance Meets Elegance</h1>
                </div>
            </div>
        </>
    );
};

export default Banner;