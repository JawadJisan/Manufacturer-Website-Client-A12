import React from 'react';
import aa from '../../../Images/aa.jpg'
import bb from '../../../Images/bb.jpg'
import cc from '../../../Images/cc.jpg'
import dd from '../../../Images/dd.jpg'
import './Bus.css'

const New = () => {
    return (
        <div className='newdiv'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <div className='grid   p-10 m-5 items-center text-center justify-center'>
                    <div>
                    <h1 className='text-4xl font-bold text-rose-800'>Dependably Creative</h1>
                    <p className='text-xl p-5 m-5'>Our clients choose us for our innovation, and stay for our ability to successfully deliver on time and budget. In 15 years and hundreds of challenging projects, we haven’t had one major hiccup.</p>
                    <button className='btn'>MORE ABOUT US</button>
                    </div>
                </div>
                
                <div className='grid grid-cols-2 items-center justify-center content-between '>
                    <img className=' imagess' src={aa} alt="" />
                    <img className=' imagess' src={bb} alt="" />
                    <img className=' imagess' src={cc} alt="" />
                    <img className=' imagess' src={dd} alt="" />
                    <img className=' imagess' src={aa} alt="" />
                    <img className=' imagess' src={cc} alt="" />
                </div>
            </div>
        </div>
    );
};

export default New;