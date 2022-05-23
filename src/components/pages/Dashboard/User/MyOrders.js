import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';
import { userColumns, userRows } from '../User/dataSource'

import './MyOrders.scss'
import { signOut } from 'firebase/auth';

const MyOrders = () => {
    const [data, setData] = useState(userRows);
    const [orders, setOrders] = useState([]);

    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();

    // useEffect(()=>{
    //     if(user){
    //         fetch(`http://localhost:5000/orders?email=${user?.email}`, {
    //     method: 'GET',
    //     headers: {
    //       'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    //     }
    //   })
    //     .then(res => {
    //       console.log('res', res);
    //     //   if (res.status === 401 || res.status === 403) {
    //         // navigate('/');
    //         // signOut(auth);
    //         // localStorage.removeItem('accessToken');
    //     //   }

    //       return res.json()
    //     })
    //     .then(data => {
    //       console.log(data)
    //       setOrders(data);
    //     })
    //     }
    // },[user])
    const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?userEmail=${user?.email}`, {
        method: 'GET',
        headers: {
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
      })
        .then(res => {
          console.log('res', res);
          if (res.status === 401 || res.status === 403) {
            navigate('/');
            // signOut(auth);
            // localStorage.removeItem('accessToken');
          }

          return res.json()
        })
        .then(data => {
          console.log(data)
          setAppointments(data);
        })
    }
  }, [user])



    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
              width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="datatable">
            <h1>My Orders: {appointments?.length} </h1>
            <div className="datatableTitle">
                Add New User
                <Link to="/users/new" className="link">
                    Add New
                </Link>
            </div>
            <DataGrid
                className="datagrid"
                rows={data}
                columns={userColumns.concat(actionColumn)}
                pageSize={9}
                rowsPerPageOptions={[9]}
                checkboxSelection
            />
        </div>
    );
};

export default MyOrders;