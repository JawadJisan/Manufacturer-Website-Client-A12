import React from 'react';
import './ManageTools.css'
import { FaTrashAlt } from "react-icons/fa";
import Swal from 'sweetalert2';


const ManageAllTools = ({ tool,refetch }) => {

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
        fetch(`https://safe-falls-41750.herokuapp.com/tools/${tool._id}`, {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
          }
        })
          .then(res => res.json())
          .then(data =>console.log(data))
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        refetch()
      }
    })
  }


  return (
    <div className='ManageDiv flex flex-col items-center justify-center'>
      <img className='images' src={tool?.image} alt="" />
      <div className='newDiv'>
        <p className="Name"> Name : {tool?.name} </p>
        <hr className='hr' />
        <p className="Price"> Price : {tool?.price} </p>
        <p className="Qty"> Stocks : {tool?.availableQuantity} </p>
        <p onClick={() => archiveFunction()} className="Qty"> <span className="btn btn-outline btn-primary btn-sm buttoon"><FaTrashAlt className='iccon' />  Delete Tools</span> </p>


      </div>
      {/* <li onClick={() => handleDelet(_id)} className="list-group-item "><span className="btn btn-outline-danger fw-bolder text-dark"><FontAwesomeIcon icon={faTrashAlt} />  Delete Inventories</span></li> */}



    </div>
  );
};

export default ManageAllTools;