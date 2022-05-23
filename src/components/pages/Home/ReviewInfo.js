import React from 'react';
import { BsFillStarFill } from "react-icons/bs";



const ReviewInfo = ({review}) => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div class="card w-96 max-h-min bg-base-100 shadow-xl">
                <figure>
                    <div class="avatar pt-6">
                        <div class="w-44  rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={review.image} />
                        </div>
                    </div>
                </figure>
                <div class="card-body">
                    <h2 class="card-title justify-center ">{review.name} </h2>
                    <p>{review.type} </p>
                    <div className='flex items-center text-center justify-center'>
                    <BsFillStarFill  style={{ color: '#ff922b' }} />
                    <BsFillStarFill  style={{ color: '#ff922b' }} />
                    <BsFillStarFill  style={{ color: '#ff922b' }} />
                    <BsFillStarFill  style={{ color: '#ff922b' }} />
                    <BsFillStarFill  style={{ color: '#ff922b' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewInfo;