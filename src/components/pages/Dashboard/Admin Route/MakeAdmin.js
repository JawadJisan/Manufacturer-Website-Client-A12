import React from 'react';
import { useQuery } from 'react-query';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import AdminUserRow from './AdminUserRow';
import './ManageOrder.css'


const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery(['users'], () => fetch(`https://safe-falls-41750.herokuapp.com/users`, {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => res.json())
    )
    if (isLoading) {
        return <ReactSpinner />
    }
    
    return (
        <div className='makeAdminDiv'>
            <h2 className='text-2xl text-center'> All users: {users?.length} </h2>
            <div class="overflow-x-auto ">
                <table class="table w-full tableWidth">
                    <thead>
                        <tr className='w-full'>
                            <th></th>
                            <th className=''>Name</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AdminUserRow
                                key={user._id}
                                index={index}
                                user={user}
                                refetch={refetch}
                            ></AdminUserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;