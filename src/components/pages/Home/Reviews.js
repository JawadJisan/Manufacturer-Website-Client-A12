import React, { useEffect, useState } from 'react';
import ReviewInfo from './ReviewInfo';

import SwiperCore, { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/bundle';


const Reviews = () => {

    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://safe-falls-41750.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        // <div className='mt-36 '>
        //     <h1 className='text-center font-mono font-bold text-4xl text-black-400'>USER REVIEWS </h1>
        //     <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

        //         {
        //             reviews?.map(review => 
        //             <ReviewInfo
        //                 review={review}
        //                 key={review._id}
        //             // refetch={refetch}
        //             >
        //             </ReviewInfo>

        //             )
        //         }
        //     </div>
        // </div>
        <div id="reviews" className="my-5">
            <div className="container">
                <div className="text-center">
                    <h1 className="text-center font-serif text-5xl font-bold display-1 mt-5 pt-5">Work Feedback</h1>
                    <p className='text-3xl font-semibold '>What our valuable customer says</p>
                </div>
                <div className="row d-flex bg-yellow-100 p-10  m-5">
                    <Swiper
                        loop={true}
                        pagination={{ clickable: true }}
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                                spaceBetween: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 10,
                            },
                        }}
                        autoplay={{
                            delay: 1000,
                            disableOnInteraction: false,
                        }}
                        spaceBetween={10}
                    >
                        {
                            reviews.map(review => {
                                return (
                                    <SwiperSlide >
                                        <ReviewInfo review={review} key={review.name} />
                                    </SwiperSlide>
                                )
                            })
                        }
                    </Swiper>

                </div>
            </div>
        </div>
    );
};

export default Reviews;