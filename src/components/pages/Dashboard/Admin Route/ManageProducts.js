import React from 'react';
import { useQuery } from 'react-query';
import ReactSpinner from '../../../Sheared/ReactSpinner';
import ManageAllTools from './ManageAllTools';
import './ManageTools.css'

const ManageProducts = () => {
    const { data: tools, isLoading, refetch } = useQuery('allParts', () => fetch(`https://safe-falls-41750.herokuapp.com/allParts`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <ReactSpinner />
    }
    return (
        <div className='containerDiv'>
            <h1 className='text-4xl font-bold text-center  p-6 m-5'>Manage All Parts : {tools.length} </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                 tools.map(tool => <ManageAllTools
                 key={tool._id}
                 tool={tool}
                 refetch={refetch}
                 ></ManageAllTools> )   
                }
            </div>
        </div>
    );
};

export default ManageProducts;