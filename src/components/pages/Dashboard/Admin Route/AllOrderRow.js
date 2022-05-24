import React from 'react';
import { Link } from 'react-router-dom';

const AllOrderRow = ({ order, index , setDeletOrder}) => {
    const { name, image, userEmail, } = order;

    const handleDeleteUnpaidOrder = event=>{

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
                {(order?.price && !order.paid) && <button className='btn btn-xs btn-error'>Unpaid</button> }
                {(order?.price && order.paid) && <div>
                    <p><span className='text-success'>Panding</span></p>
                    <p> Transaction Id: <span className='text-success'>{order.transactionId} </span></p>
                </div>}
            </td>
        </tr>
    );
};

export default AllOrderRow;