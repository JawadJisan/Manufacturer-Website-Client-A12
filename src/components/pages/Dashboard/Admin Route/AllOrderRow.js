import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";


const AllOrderRow = ({ order, index, setDeletOrder, refetch }) => {
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
                refetch();
            }
        })
    }

  
    function archiveFunction(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "If You Delet Product will not appear on the home page.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
    fetch(`http://localhost:5000/orders/${_id}`, {
              method: 'DELETE',
              headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
              }
            })
              .then(res => res.json())
              .then(data =>console.log(data))
            Swal.fire(
              'Deleted!',
              'This Order Successfully Deleted',
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
                    <img src={image} />
                </div>
            </div></td>
            <td>{name} </td>
            <td>{userEmail} </td>
            <td>
                {!order.paid && <p onClick={() => archiveFunction()} className="Qty"> <span className="btn btn-outline btn-primary btn-sm buttoon"><FaTrashAlt className='iccon' />  DELET ORDER</span> </p>}

            </td>
            <td>
                {(order?.price && !order.paid) && <button className='btn btn-xs btn-error'>Unpaid</button>}
                {
                (order?.price && order.paid) && 
                <div>
                    <button className='btn btn-success btn-sm' onClick={()=> handleShipment(_id)}>Panding</button>
                </div>}
                {order?.status && <button className='btn btn-primary'>Shipped</button> }
               
                {/* {!order.status && order.paid ? <div>
                    <button className='btn btn-success btn-sm' onClick={()=> handleShipment(_id)}>Panding</button>
                </div>:
                order.status && 
                <p>Shipped</p> } */}
                
            </td>
        </tr>
    );
};

export default AllOrderRow;