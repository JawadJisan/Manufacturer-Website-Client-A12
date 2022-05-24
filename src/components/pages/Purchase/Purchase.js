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
    console.log(qty,'quantity')

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

    /*  */
    // let quantit;
    //     if(quantit == {partsInfo.minOrderQuantity}){

    //     }
    const handlePurchase = event =>{
        event.preventDefault();
        const quantity = event.target.quantity.value;
        // if(quantity  )
        console.log(quantity, 'from quantit')
        // if(quantity){
        //     // quantity = 
        // }
        const purchase={
            name: partsInfo.name,
            image: partsInfo.image,
            description: partsInfo.description,
            price: partsInfo.price,
            userEmail: user?.email,
            userName: user?.displayName,
            address, phone
        }
        fetch('http://localhost:5000/purchase',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body: JSON.stringify(
                purchase
              ),
        })
        .then(res => res.json())
        .then(data =>{
            if(data.success){
                Swal.fire(
                    'Your Purchase Is Compleate !',
                    'You clicked the button!',
                    'success'
                  )
                // toast(`Appointment is set, ${formatedDate} at ${slot}`)
                console.log(data)
            }
            else{
                // toast(`You Already Have an Appointment on, ${data.booking?.date} at ${data.booking?.slot}`)
                console.log(data)

            }
            // refetch();
            // setTreatment(null)
            // to close the Modal
        } )
        



    }


    return (
        <div className='flex flex-col items-center justify-center'>
            {partsId}
            {partsInfo.name}
            <div class="card  bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={partsInfo.image} alt="Shoes" class="rounded-xl" />
                </figure>
                <form onSubmit={handlePurchase}>
                    <div class="card-body items-center text-center">
                        <h2 class="card-title">{partsInfo.name} </h2>
                        <h3 class="">Min Order: {partsInfo.minOrderQuantity} </h3>
                        <h3 class="">Available Quantity: {partsInfo.availableQuantity} </h3>

                        <p>{partsInfo.description} </p>
                        <h1>Price: $-{partsInfo.price} </h1>
                        {/* user info */}
                        <h1>{user?.displayName} </h1>
                        <h3>{user?.email} </h3>

                        {/* quantity */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span required class="label-text">QUANTITY</span>
                            </label>
                            <input type="number" onChange={(e)=>setQuantity(e.target.value)}  name='quantity' placeholder={partsInfo.minOrderQuantity} class="input input-bordered w-full max-w-xs" />                        
                        </div>

                        {/* address */}

                        <input type="text" required onChange={(e) => setAddress(e.target.value)} name='address' placeholder="Shipping Address" class="input input-bordered w-full max-w-xs" />
                        <input type="number" required onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" class="input input-bordered w-full max-w-xs" />

                        {(qty === partsInfo.minOrderQuantity && partsInfo.availableQuantity) && 
                        <div>
                            <button className='btn '>CLICK ME</button>
                        </div> 
                        }
                        

                        <input type="submit" value='Purchase' className="btn btn-secondary w-full max-w-xs" />
                    </div>
                </form>
            </div>

            {/* <button onClick={() => handleDelever(partsInfo)} className="btn btn-lg m-3 text-light btn-danger fw-bold"> Delivered</button> */}
        </div>

    );
};

export default Purchase;