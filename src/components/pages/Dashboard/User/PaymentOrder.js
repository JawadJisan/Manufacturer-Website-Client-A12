import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import CheckoutForm from './CheckoutForm';


const stripePromise = loadStripe('pk_test_51L0l3aDIahaKXnTeiATjHgffljac8OyDTEMyVn0KIsKESv0LjifHOm5c2Y8vcXyhHSvzEZB265lqIC87Cgij288F00cYoKwWBs');


const PaymentOrder = () => {
    const { id } = useParams();

    const url = `http://localhost:5000/purchase/${id}`;

    const { data: data, isLoading } = useQuery(['purchase', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <ReactSpinner/>
    }
    return (
        <div>
            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {data.userName}</p>
                    <h2 class="card-title">Please Pay for {data.name}</h2>
                    <p>About<span className='text-orange-700'>{data.description}</span></p>
                    <p>Please pay: ${data.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm data={data} />
                    </Elements>

                </div>
            </div>
        </div>
    );
};

export default PaymentOrder;