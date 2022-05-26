import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";


const OrderRow = ({ order, index, setDeletOrder, refetch }) => {
    const { name, image, userEmail, } = order;
    function archiveFunction(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "If You Delet Product will Remove From Your Wallet",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://safe-falls-41750.herokuapp.com/orders/${order._id}`, {
                method: 'DELETE',
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
              .then(res => res.json())
              .then(data =>console.log(data))
            Swal.fire(
              'Deleted!',
              'This Order Successfully Deleted From You !!',
              'success'
            )
            refetch();
          }
        })
      }
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
            <td>{order?.quantity} </td>
            <td>
               {!order.paid && <p onClick={() => archiveFunction()} className="Qty"> <span className="btn btn-outline-error btn-sm "><FaTrashAlt className='iccon' />  DELET ORDER</span> </p>}

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