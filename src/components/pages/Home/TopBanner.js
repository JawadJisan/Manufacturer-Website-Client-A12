import React from 'react';
import a from '../../../Images/a.jpg'
import b from '../../../Images/b.jpg'
import c from '../../../Images/c.jpg'
import d from '../../../Images/d.jpg'
import e from '../../../Images/e.jpg'
import f from '../../../Images/f.jpg'
import Typewriter from 'typewriter-effect';
import './Bus.css'
import { faChalkboardTeacher } from "react-icons/fa";


const TopBanner = () => {
    return (
        <>
            <div class="hero h-screen mt-10">
                {/* <div class="hero-content flex-col divv lg:flex-row content-between"> */}
                <div class="hero-content grid grid-cols-1 content-between md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div >
                        <h1 data-aos-duration="2000" data-aos-delay="200"
                            data-aos="fade-right" class="text-5xl font-bold">GET CAR TOOLS  <br />  AND REPAIRS YOUR CARS </h1>
                        
                            <span class="py-6 max-w-xl">
                                <h1 className=" text-5xl " >
                                    <Typewriter
                                        options={{
                                            strings: ["FACTORY FEATURED PRODUCTS  TRACK DAY", "NEW ARRIVALS ", "MAKE AN EXECUTIVE"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </span>
                            
                            <button style={{ fontSize: "30px" }} className="btn btn-lg mr-5 mt-5"><faChalkboardTeacher className='iconnns' /><faChalkboardTeacher/> Learn More</button>
                            

                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div class="carousel-item">
                                <img src={a} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={b} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={c} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={d} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={d} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={e} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={f} class="rounded-box" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;