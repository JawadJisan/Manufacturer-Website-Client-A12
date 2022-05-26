import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import ReactSpinner from '../../Sheared/ReactSpinner';
const RequireAuth = ({children}) => {
        const [user, loading, error] = useAuthState(auth);
        const location = useLocation();
        if(loading){
            return <ReactSpinner></ReactSpinner>
        }
        if(user){
            return children;
        }
        else{
            return <Navigate to='/login' state={{from: location}}></Navigate>
        }
};


export default RequireAuth;