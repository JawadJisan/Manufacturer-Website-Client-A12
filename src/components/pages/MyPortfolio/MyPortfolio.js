import React from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css'
import img from'../../../Images/img.jpg'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


const MyPortfolio = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-8'>
            <div class="avatar">
                <div class="w-96 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
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
                        <div className='flex justify-evenly items-center content-center flex-wrap content-between '>
                            <a className='icons items-center text-center' href="https://www.facebook.com/profile.php?id=100054546439637"><FaFacebookSquare /></a>
                            <a className='icons' href="https://github.com/JawadJisan"><FaGithubSquare /></a>
                            <a className='icons' href="https://www.linkedin.com/in/ji-san-6a7b69218/"><FaLinkedin /></a>

                        </div>
                    </div>


                </div>


            </div>

        </div>
    );
};

export default MyPortfolio;