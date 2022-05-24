import React from 'react';
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';

const AdminUserRow = ({ user, index, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () =>{
          fetch(`http://localhost:5000/users/admin/${email}`,{
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
                  refetch();
                  Swal.fire(
                    'Congratss',
                    'Successfully Made an admin',
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
            <td>{<button class="btn btn-outline btn-xs">Remove User</button>} </td>
        </tr>
    );
};

export default AdminUserRow;