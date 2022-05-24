import React, { useEffect, useState } from 'react';
import ReviewInfo from './ReviewInfo';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/bundle';


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div className='mt-36 '>
            <h1 className='text-center font-mono font-bold text-4xl text-black-400'>USER REVIEWS </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                {
                    reviews?.map(review => 
                    <ReviewInfo
                        review={review}
                        key={review._id}
                    // refetch={refetch}
                    >
                    </ReviewInfo>

                    )
                }
            </div>
        </div>
    );
};

export default Reviews;