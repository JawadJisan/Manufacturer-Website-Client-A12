import React from 'react';
import { Link } from 'react-router-dom';

const OrderRow = ({ order, index, setDeletOrder }) => {
    const { name, image, userEmail, } = order;
    return (
        <tr>
            <th>{index + 1} </th>
            <td><div class="avatar">
                <div class="w-16 rounded-full">
                    <img src={image}  />
                </div>
            </div></td>
            <td>{name} </td>
            <td>{userEmail} </td>
            <td>
                <label onClick={() => setDeletOrder(order)} for="delet-confirm-modal" class="btn btn-xs">DELET</label>
                {/* <button onClick={() => handleDelet(email)} class="btn btn-xs btn-error">Delet</button> */}
            </td>
            <td>
                  {(order?.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>PAY</button> </Link> }
                  {(order?.price && order.paid) && <div>
                    <p><span className='text-success'>PAID</span></p>
                    <p> Transaction Id: <span className='text-success'>{order.transactionId} </span></p>
                  </div>  }
                  </td>
        </tr>
    );
};

export default OrderRow;