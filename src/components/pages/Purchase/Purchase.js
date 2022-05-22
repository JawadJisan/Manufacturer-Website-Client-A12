import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReactSpinner from '../../Sheared/ReactSpinner';
import './Purchase.css'

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);

    const { partsId } = useParams();

    const url = `http://localhost:5000/part/${partsId}`
    const { data: partsInfo, isLoading } = useQuery(['part', partsId], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <ReactSpinner />
    }

    return (
        <div className='flex flex-col items-center justify-center'>
            {partsId}
            {partsInfo.name}
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src="https://api.lorem.space/image/shoes?w=400&h=225" alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{partsInfo.name} </h2>
                    
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

            {/* <button onClick={() => handleDelever(partsInfo)} className="btn btn-lg m-3 text-light btn-danger fw-bold"> Delivered</button> */}
        </div>

    );
};

export default Purchase;