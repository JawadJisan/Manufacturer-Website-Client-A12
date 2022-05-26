import React from 'react';
import banner from '../../../Images/banner.jpg'
import './Bus.css'

const Section = () => {
    return (
        <div className='mt-40 mb-36'>
            <div>
                <div className="bg-primary px-10 py-14" style={{
                    backgroundImage: `url(${banner})`, backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}
                >
                    <div className='text-center pb-14 text-white bg-clip-text bg-gradient-to-br from-accent to-secondary'>
                        <p className='text-5xl p-5 font-bold text-transparent bg-clip-text bg-gradient-to-br from-accent to-secondary'>Contact Us</p>
                        <h3 className='text-4xl'>Let me know what you think about Our Tools and Parts</h3>
                    </div>
                    <div className='grid grid-cols-1 justify-items-center gap-5'>
                        <input
                            type='text'
                            placeholder='Email Address'
                            className='input w-full max-w-md'

                        >
                        </input>
                        <input
                            type='text'
                            placeholder='Subject'
                            className='input w-full max-w-md'

                        >
                        </input>
                        <textarea
                            className='textarea w-full max-w-md'
                            placeholder='Your Massage'
                            rows={6}
                        >
                        </textarea>
                        <button className='contactBTN'>Contact Us</button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Section;