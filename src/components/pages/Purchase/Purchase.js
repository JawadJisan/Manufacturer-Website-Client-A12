import React, { useRef, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReactSpinner from '../../Sheared/ReactSpinner';
import './Purchase.css'
import Swal from 'sweetalert2'


const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [qty, setQuantity] = useState('');

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
    
    // const availableQuantity = partsInfo.availableQuantity - qty;
    // console.log(availableQuantity);
  
    const handlePurchase = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        // if(quantity  )
        console.log(quantity, 'from quantit')
        // if(quantity){
        //     // quantity = 
        // }
        const purchase = {
            name: partsInfo.name,
            image: partsInfo.image,
            description: partsInfo.description,
            price: partsInfo.price,
            userEmail: user?.email,
            userName: user?.displayName,
            address, phone, 
            quantity: qty,
            availableQuantity: partsInfo.availableQuantity - qty,
        }
        // const newOrder = partsInfo.availableQuantity - qty;
        // console.log(newOrder, 'new order')

        // if (qty <= partsInfo.minOrderQuantity || qty >= partsInfo.availableQuantity) {
        // if (qty <= partsInfo.minOrderQuantity) {
        //     Swal.fire(
        //         'You have to select More then Minimum Quantity And Lower Than Available Quantity',
        //         'Enter Your Quantity Avove Min Quantity',
        //         'error',
        //         // 'new item collection =' {partsInfo.availableQuantit}
        //     )
        // }
        // else {
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify(
                    purchase
                ),
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        console.log(data)
                        Swal.fire(
                            'Your Purchase Is Compleate !',
                            'You clicked the button!',
                            'success',
                        )

                        /* ------- put new quantity on the Home page */

                            fetch(`http://localhost:5000/changeQty/${partsId}`, {
                            method: 'PUT',
                            headers: {
                                authorization: `Bearer ${localStorage.getItem('accessToken')}`,
                                'content-type':'application/json'
                            },
                            body:JSON.stringify(purchase)

                        })
                            .then(res => res.json())                    
                            .then(data => console.log(data))
                        
                    
                    }
                    else {
                        console.log(data)
                    }
                    // refetch();
                })
        // }




    }


    return (
        <div className='flex flex-col items-center justify-center'>
            <div class="card card-bodys bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={partsInfo.image} alt="Shoes" class="rounded-xl imgbd" />
                </figure>
                <form onSubmit={handlePurchase}>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{partsInfo.name} </h2>
                        <h3 class="minOrder">Min Order: {partsInfo.minOrderQuantity} </h3>
                        <h3 class="maxQty">Available Quantity: {partsInfo.availableQuantity} </h3>

                        <p>{partsInfo.description} </p>
                        <h1 className='price'>Price: $-{partsInfo.price} </h1>
                        {/* user info */}
                        <h1 className='uName'>{user?.displayName} </h1>
                        <h3 className='uEmail'>{user?.email} </h3>

                        {/* quantity */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span required class="label-text font-mono text-2xl">QUANTITY</span>
                            </label>
                            <input required type="number" onChange={(e) => setQuantity(e.target.value)} name='quantity' placeholder={partsInfo.minOrderQuantity} class="input input-bordered w-full max-w-xs" />
                        </div>

                        {/* address */}

                        <input type="text" required onChange={(e) => setAddress(e.target.value)} name='address' placeholder="Shipping Address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" required onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />



                        {<input type="submit" value='Purchase' className="btn btn-secondary w-full max-w-xs" />}
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Purchase;