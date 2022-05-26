import React from 'react';
import { BsFillStarFill } from "react-icons/bs";
import './Review.css'


const ReviewInfo = ({ review }) => {
    return (
        <div className='flex flex-col  items-center justify-center'>
            <div class="card w-96 max-h-min reviewDiv bg-base-100 shadow-xl border-red-700 ">
                <figure>
                    <div class="avatar pt-6">
                        <div class="w-44  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.image} />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title reviewName justify-center text-red-900 ">{review.name} </h2>
                    <p className='text-gray-900'>{review.type} </p>
                    <div className='flex items-center text-center justify-center'>
                        {review?.rating >= 3 ? <>
                            <BsFillStarFill style={{ color: '#ff922b' }} />
                            <BsFillStarFill style={{ color: '#ff922b' }} />
                            <BsFillStarFill style={{ color: '#ff922b' }} />
                            <BsFillStarFill style={{ color: '#ff922b' }} />
                            <BsFillStarFill style={{ color: '#ff922b' }} />
                        </> :
                            <>
                                <BsFillStarFill style={{ color: '#ff922b' }} />
                                <BsFillStarFill style={{ color: '#ff922b' }} />
                            </>

                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewInfo;