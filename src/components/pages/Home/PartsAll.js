import React from 'react';
import { useQuery } from 'react-query';
import ReactSpinner from '../../Sheared/ReactSpinner';
import PurchaseSingle from './PurchaseSingle';

const PartsAll = () => {
    // const {data: parts, isLoading, refetch} = useQuery('allParts',()=>fetch(`http://localhost:5000/allParts`))
    // .then(res=>res.json())
    const { data: allParts, isLoading, refetch } = useQuery('allParts', () =>
     fetch('http://localhost:5000/allParts').then(res =>
       res.json())
   )
   if(isLoading){
    return <ReactSpinner/>
}
    return (
        <div className=''>
            <p>Available Parts: {allParts.length} </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allParts?.map(part => <PurchaseSingle
                        part={part}
                        key={part._id}
                    >
                    </PurchaseSingle>
                        
                        )
                }
            </div>
        </div>
    );
};

export default PartsAll;