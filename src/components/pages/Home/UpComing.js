import React from 'react';
import './Up.css'

import { FaShippingFast, FaGifts, FaHeadset } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FcBullish, FcCrystalOscillator, FcElectronics, FcKindle, FcHome, FcLock, FcOk, FcPlus } from "react-icons/fc";


const UpComing = () => {
    return (
        // <div style={{backgroundColor:'#252525' }} >
        <div className='mb-20 ' style={{backgroundColor:'#e4e6f0' }} >
            <div>
                <p className='text-center text-4xl p-10 font-serif font-bold'>Upcoming Our Services</p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    <div className='flex items-center divCC '>
                        <div className='m-3 p-3'>
                            <FaShippingFast className='upcomingIcon' />
                        </div>
                        <div className='ml-8 divInfo'>
                            <h1 className='text-2xl font-bold'>Free Shipping</h1>
                            <p className='text-xl'>Shipping in World for Orders over $99</p>
                        </div>
                    </div>
                    <div className='flex items-center divCC '>
                        <div className='m-3 p-3'>
                            <FaGifts className='upcomingIcon' />
                        </div>
                        <div className='ml-8 divInfo'>
                            <h1 className='text-2xl font-bold'>Special Gift</h1>
                            <p className='text-xl'>Special gift for new Clients</p>
                        </div>
                    </div>
                    <div className='flex items-center divCC '>
                        <div className='m-3 p-3'>
                            <FaHeadset className='upcomingIcon' />
                        </div>
                        <div className='ml-8 divInfo'>
                            <h1 className='text-2xl font-bold'>Support Online 24/7</h1>
                            <p className='text-xl'>Call : (123) 236 757 914</p>
                        </div>
                    </div>
                    <div className='flex items-center divCC '>
                        <div className='m-3 p-3'>
                            <MdOutlinePayment className='upcomingIcon' />
                        </div>
                        <div className='ml-8 divInfo'>
                            <h1 className='text-2xl font-bold'>Security Payment</h1>
                            <p className='text-xl'>Embarrassing hidden middle</p>
                        </div>
                    </div>

                </div>
                <div class="divider"></div>
                <div>
                    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        <div className=''>
                            <div className='m-3 p-3'>
                                <h1 className='text-3xl font-bold text-center '>Contact</h1>
                            </div>
                            <div className='ml-8 flex'>
                                <FaShippingFast className='text-3xl ' />
                                <p className='text-xl'>44 Shirley Ave, West Chicago, IL 60185 Angelo
                                </p>
                            </div>
                            <div className='ml-8 flex'>
                                <FaShippingFast className='text-3xl' />
                                <p className='text-xl'>Shipping in World for Orders over $99</p>
                            </div>
                            <div class="divider lg:divider-horizontal"></div>
                        </div>
                        <div className=''>
                            <div className='m-3 p-3'>
                                <h1 className='text-2xl font-bold text-center'>New Coming Tools</h1>
                            </div>
                            <div className='ml-8 flex text-center items-center content-center'>
                                <FcLock className='text-3xl text-center  m-4' />
                                <FcOk className='text-3xl text-center  m-4' />
                                <FcPlus className='text-3xl text-center  m-4' />
                            </div>
                            <div className='ml-8 text-center'>
                                <p className='text-xl p-2'>MdOutlinePayment</p>
                                <p className='text-xl p-2'>New products</p>
                                <p className='text-xl p-2'>Best sales</p>
                                <p className='text-xl p-2'>Sitemap</p>
                            </div>
                            <div class="divider lg:divider-horizontal"></div>
                        </div>

                        <div className=''>
                            <div className='m-3 p-3'>
                                <h1 className='text-2xl font-bold text-center'>Our Company</h1>
                            </div>
                            <div className='ml-8 flex text-center items-center content-center'>
                                <FcBullish className='text-3xl text-center  m-4' />
                                <FcHome className='text-3xl text-center  m-4' />
                                <FcKindle className='text-3xl text-center  m-4' />
                            </div>
                            <div className='ml-8 text-center'>
                                <p className='text-xl p-2'>Delivery</p>
                                <p className='text-xl p-2'>Legal Notice</p>
                                <p className='text-xl p-2'>About us</p>
                                <p className='text-xl p-2'>My account</p>
                            </div>
                            <div class="divider lg:divider-horizontal"></div>
                        </div>
                        <div className=''>
                            <div className='m-3 p-3'>
                                <h1 className='text-2xl font-bold text-center'>Shop By</h1>
                            </div>
                            <div className='ml-8 flex text-center items-center content-center'>
                                <FcBullish className='text-3xl text-center  m-4' />
                                <FcCrystalOscillator className='text-3xl text-center  m-4' />
                                <FcElectronics className='text-3xl text-center  m-4' />

                            </div>
                            <div className='ml-8 text-center'>
                                <p className='text-xl p-2'>Your Orders</p>
                                <p className='text-xl p-2'>Your Wishlist</p>
                                <p className='text-xl p-2'>Payment</p>
                                <p className='text-xl p-2'>Delivery</p>
                            </div>
                            <div class="divider lg:divider-horizontal"></div>
                        </div>



                    </div>
                </div>

            </div>
        </div>
    );
};

export default UpComing;