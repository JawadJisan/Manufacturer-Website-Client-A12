import React from 'react';
import { useNavigate } from 'react-router-dom';
import {  FaCartPlus } from "react-icons/fa";


const PurchaseSingle = ({ part, refetch }) => {
    const { _id,name, image, description, minOrderQuantity,availableQuantity,price } = part;
    // console.log(_id);

    const navigate = useNavigate();
    const goToPurchase = id => {
        navigate(`purchase/${id}`);
    }
    
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-2 pt-2">
                    <img src={image} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title">{name} </h2>
                    <h4>Min Order Quantity: {minOrderQuantity} </h4>
                    <h4>Available Quantity: {availableQuantity} </h4>
                    <h2>Price: $-{price} </h2>
                    <p>{description} </p>
                    <div class="card-actions">
                        <button onClick={() =>goToPurchase(_id)} class="btn btn-primary"><FaCartPlus /><span className='px-5'>Add To Cart</span> </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PurchaseSingle;