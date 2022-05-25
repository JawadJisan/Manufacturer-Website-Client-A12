import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'
import imggg from '../../../Images/imggg.jpg'

const NotFound = () => {
    return (
        <section className='px-4 py-32 mx-auto max-w-7xl'>
      <div className='grid items-center w-full grid-cols-1 gap-10 mx-auto  lg:grid-cols-2 xl:gap-32'>
        <div>
          <div className='img-404  bg-gray-200 rounded-lg'>
            <img
              src={imggg}
              alt='404'
            />
          </div>
        </div>
        <div>
          <p className='mb-2 text-xs font-semibold tracking-wide text-gray-500 uppercase'>
            Error 404
          </p>
          <h1 className='mb-4 text-2xl font-extrabold leading-tight tracking-tight text-left text-gray-900 md:text-4xl'>
            Oops! The page you're looking for isn't here.
          </h1>
          <p className='mb-5 text-base text-left text-gray-800 md:text-xl'>
            You might have the wrong address, or the page may have moved.
          </p>
          <Link
            to='/'
            className='w-full mb-2 py-2 px-3 text-white mt-3 bg-cyan-600 sm:w-auto sm:mb-0'
          >
            Back to homepage
          </Link>
          
        </div>
      </div>
    </section>
    );
};

export default NotFound;