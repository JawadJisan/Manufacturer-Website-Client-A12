import React from 'react';
import { useQuery } from 'react-query';
import ReactSpinner from '../../Sheared/ReactSpinner';
import PurchaseSingle from './PurchaseSingle';

const PartsAll = () => {
    
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () =>
     fetch('http://localhost:5000/allParts').then(res =>
       res.json())
   )
   if(isLoading){
    return <ReactSpinner/>
}
    return (
        <div className='mt-20'>
            <p className='text-center text-red-500 text-5xl font-serif font-bold'> Available Parts in Our Stocks</p>
            <p className='text-center p-8 text-amber-600 text-3xl font-serif font-bold'> Collect Your Favourite Tools</p>
            <div className='grid grid-cols-1 md:grid-cols-2 mx-10 lg:mx-16 lg:grid-cols-3 gap-5'>
                {
                    allParts?.map(part => <PurchaseSingle
                        part={part}
                        key={part._id}
                        refetch={refetch}
                    >
                    </PurchaseSingle>
                        
                        )
                }
            </div>
        </div>
    );
};

export default PartsAll;