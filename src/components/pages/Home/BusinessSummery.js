import React from 'react';
import bgg from '../../../Images/bgg.jpg'
import './Bus.css'
import { ImFlag } from "react-icons/im";
import { FcApproval, FcBusinessman } from "react-icons/fc";



const BusinessSummery = () => {
    return (
        <div className='mt-52 mb-36'>
            <div className="px-10 py-14" style={{
                // backgroundImage: `url(${bgg})`, backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}
            >
                <div className='text-center pb-14'>
                    <p className='text-6xl font-semibold p-2'>TEAM. CUSTOMER. COMMUNITY</p>
                    <h3 className='text-4xl font-serif m-3'>We Work the Best Partners</h3>
                </div>
                {/* <div class=" shadow partnersBox "> */}
                <div class=" shadow grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 ">

                    <div className='bg-red-200 p-10 rounded-3xl'>
                        <div className='text-center grid mx-auto content-center'>
                            <p><ImFlag className='mx-auto patnersIcon' /> </p>
                        </div>
                        <h1 class="Titles">50+</h1>
                        <p className='font-mono text-center text-4xl'>Conutries</p>
                    </div>
                    <div className='bg-red-200 p-10 rounded-3xl'>
                        <div className='text-center grid mx-auto content-center'>
                            <p><FcApproval className='mx-auto patnersIcon' /> </p>
                        </div>
                        <h1 class="Titles">300+</h1>
                        <p className='font-mono text-center text-4xl'>Complete Projets</p>
                    </div>
                    <div className='bg-red-200 p-10 rounded-3xl'>
                        <div className='text-center grid mx-auto content-center'>
                            <p><FcBusinessman className='mx-auto patnersIcon' /> </p>
                        </div>
                        <h1 class="Titles">99+</h1>
                        <p className='font-mono text-center text-4xl'>Happy Clients</p>
                    </div>
                </div>
                <div className='rounded-lg grid grid-cols-1 lg:grid-cols-2 shadow-lg mx-auto z-20 bg-base-300 p-10 w-5/6  '>
                    <div>
                        <h1 className='text-5xl text-slate-700 font-serif text-amber-700'>Have any question about us or get a product request? </h1>
                        <p className='font-thin text-3xl text-cyan-500 font-bold'>Don't hesiatate to contact us</p>
                    </div>
                    <div className='text-center  grid mx-auto content-center  gap-2 '>

                            <button className='btn btn-secondary mt-5 p-2'>REQUEST For QOUTE</button>
                            <button className='btn btn-success mt-5 p-2'>Contact Us</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummery;