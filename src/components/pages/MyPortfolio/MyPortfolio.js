import React from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css'
import img from '../../../Images/img.jpg'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


const MyPortfolio = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-44 mb-36'>
            <div class="avatar">
                <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img}
                    />
                </div>
            </div>
            <div className='bg-slate-100 p-16 rounded-3xl'>
                <p className='text-5xl p-3'>JAWAD IBNE RAFIQ</p>
                <p className='text-3xl p-6'>Email: jisan.sc@gmail.com</p>
                <div>
                    <h1 className='text-center text-2xl'>Educational Qualification</h1>
                    <input className='h-6 p-4 mt-4' type="" value='Bsc in ECE(Electronics and communication) 1st semister ' disabled />
                    <div className='items-center  text-center'>
                        <p className='text-2xl p-5'>Find Me On</p>
                        <div className='flex justify-evenly items-center  flex-wrap content-between '>
                            <a className='icons items-center text-center' href="https://www.facebook.com/profile.php?id=100054546439637"><FaFacebookSquare /></a>
                            <a className='icons' href="https://github.com/JawadJisan"><FaGithubSquare /></a>
                            <a className='icons' href="https://www.linkedin.com/in/ji-san-6a7b69218/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <h1 className='text-center mt-10 text-3xl font-semibold'>My Skills</h1>
                <p className='text-center text-xl font-semibold'>-- what i know --</p>

                <div className='skillsContainer'>
                    <p>HTML</p>
                    <progress class="progress progress-primary " value="95" max="100"></progress>
                </div>
                <div>
                    <p>CSS</p>
                    <progress class="progress progress-error  " value="80" max="100"></progress>
                </div>
                <div>
                    <p>JAVASCRIPT</p>
                    <progress class="progress progress-primary " value="65" max="100"></progress>
                </div>
                <div>
                    <p>REACT.JS</p>
                    <progress class="progress progress-success " value="70" max="100"></progress>
                </div>
                <div>
                    <p>NODE.JS</p>
                    <progress class="progress progress-info  " value="50" max="100"></progress>
                </div>
                <div>
                    <p>EXPRESS.JS</p>
                    <progress class="progress progress-success " value="50" max="100"></progress>
                </div>
                <div>
                    <p>MONGODB</p>
                    <progress class="progress progress-info  " value="49" max="100"></progress>
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-3xl text-red-700 p-4'>Recent Projects</h1>
                <p className='text-center text-xl font-bold pb-3'>i've completed</p>
                <div className='projectContainer'>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Warehouse Management</h2>
                            <p>[web app] [april 2022]</p>
                            <ul className='text-left'>
                                <li>Product Add Facility</li>
                                <li>Add New Product</li>
                                <li>Log in Facility</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://warehouse-client-1a22b.web.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">PERSONAL SERVICE PROVIDER</h2>
                            <p>[web app] [april 2022]</p>
                            <ul className='text-left'>
                                <li>Any User or Agency get Available Services.</li>
                                <li>Secure Athentication.</li>
                                <li>User login Register Facility</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://personal-service-assignment10.web.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">PRODUCT REVIEW</h2>
                            <p>[web app] [March 2022]</p>
                            <ul className='text-left'>
                                <li>know specification about gadgets.</li>
                                <li>know specification about gadgets.</li>
                                <li>User Review</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://product-review-assignment9.netlify.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Choose Your Lucky Super CAR</h2>
                            <p>[web app] [March 2022]</p>
                            <ul className='text-left'>
                                <li>Add to Your Cart in Some Super Cars</li>
                                <li>Know Specifications about superCar.</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://playful-druid-80dbda.netlify.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default MyPortfolio;