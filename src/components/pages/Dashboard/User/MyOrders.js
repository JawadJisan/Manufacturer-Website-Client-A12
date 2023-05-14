import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

import './MyOrders.scss'
import { signOut } from 'firebase/auth';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import { useQuery } from 'react-query';
import OrderRow from './OrderRow';
import DeletConfirmModal from './DeletConfirm';

const MyOrders = () => {
    const [deletOrder, setDeletOrder] = useState(null);
    const [aa, setAA] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const userEmail = user?.email;
    const navigate = useNavigate();

    
    const { data: services, isLoading, refetch } = useQuery(['orders', userEmail], () => fetch(`https://manufacturer-website-werver-a12.onrender.com/orders?userEmail=${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <ReactSpinner />
    }



   

  

    return (
        <div>
            <h2 className='text-3xl text-center'>My Orders: {services.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>QTY </th>
                            <th>Action</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            services.map((order, index) => <OrderRow
                                key={order._id}
                                index={index}
                                order={order}
                                refetch={refetch}
                                setDeletOrder={setDeletOrder}
                            />)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;