import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllOrderRow = ({ order, index, setDeletOrder }) => {
    const { name, image, userEmail, _id } = order;

    const handleShipment = id =>{
        fetch(`http://localhost:5000/changeStatus/${id}`, {
        method: 'PUT',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    })
        .then(res => {
            if (res.status === 403) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Faield Shipped Your Order!!!',
                })

            }
            return res.json()
        })
        .then(data => {
            console.log(data, 'Order Shipped')
            if (data.modifiedCount > 0) {
                // refetch();
                Swal.fire(
                    'Congratss',
                    'Your Ordere is Shipped Successfully',
                    'success'
                )
            }
        })
    }

    return (
        <tr>
            <th>{index + 1} </th>
            <td><div class="avatar">
                <div class="w-16 rounded-full">
                    <img src={image} />
                </div>
            </div></td>
            <td>{name} </td>
            <td>{userEmail} </td>
            <td>
                {!order.paid && <label for="delet-confirm-modal" onClick={() => setDeletOrder(order)} class="btn btn-xs"> DELET </label>}

            </td>
            <td>
                {(order?.price && !order.paid) && <button className='btn btn-xs btn-error'>Unpaid</button>}
                {(order?.price && order.paid) && <div>
                    <button className='btn btn-success btn-sm' onClick={()=> handleShipment(_id)}>Panding</button>
                    <p> Transaction Id: <span className='text-success'>{order.transactionId} </span></p>
                </div>}
            </td>
        </tr>
    );
};

export default AllOrderRow;