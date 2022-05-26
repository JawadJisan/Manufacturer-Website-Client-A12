import React from 'react';
import Swal from 'sweetalert2';
import { FaTrashAlt } from "react-icons/fa";


const AdminUserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () =>{
          fetch(`https://safe-falls-41750.herokuapp.com/users/admin/${email}`,{
              method:'PUT',
              headers:{
                  authorization:`Bearer ${localStorage.getItem('accessToken')}`
              }
          })
          .then(res=>{
              if(res.status === 403){
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Faield to Make an admin!!!',
                })
                 
              }
              return res.json()
          })
          .then(data=>{
              if(data.modifiedCount>0){
                Swal.fire(
                  'Congratss',
                  'Successfully Made an admin',
                  'success'
                  )
                  refetch();
                }
          })
    }
    function archiveFunction(event) {
        Swal.fire({
          title: 'Are you sure?',
          text: "Want To Delet This User?!? ",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://safe-falls-41750.herokuapp.com/user/${user._id}`, {
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
          }
        })
      }
    return (
        <tr class="hover">
            <th>{index + 1} </th>
            <td>{email} </td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-outline btn-xs">Make Admin</button>} </td>
            <td><p onClick={() => archiveFunction()} className="Qty"> <span className="btn btn-outline btn-primary btn-sm buttoon"><FaTrashAlt className='iccon' />  Delete User</span> </p></td>
        </tr>
    );
};

export default AdminUserRow;