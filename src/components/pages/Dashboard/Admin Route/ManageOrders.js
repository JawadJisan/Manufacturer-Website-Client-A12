import React, { useState } from 'react';
import { useQuery } from 'react-query';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import DeletConfirmModal from '../User/DeletConfirm';
import AllOrderRow from './AllOrderRow';
import './ManageOrder.css'

const ManageOrders = () => {
    const [deletOrder, setDeletOrder] = useState(null);

    const { data: allPurchases, isLoading, refetch } = useQuery('allPurchases', () =>
        fetch('http://localhost:5000/allPurchases').then(res =>
            res.json())
    )
    if (isLoading) {
        return <ReactSpinner />
    }

    return (
        <div className='manage-order'>
            <h2 className='text-2xl text-center'> All users: {allPurchases?.length} </h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>IMAGE</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>Action</th>
                            <th>Payment</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            allPurchases.map((order, index) => <AllOrderRow
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
            {deletOrder && <DeletConfirmModal 
            setDeletOrder={setDeletOrder}
            deletOrder={deletOrder}
            refetch={refetch}
            />}
        </div>
    );
};

export default ManageOrders;