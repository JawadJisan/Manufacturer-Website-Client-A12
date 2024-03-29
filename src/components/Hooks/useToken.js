import React, { useEffect, useState } from 'react';

const useToken = (user) => {
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email = user?.user?.email;
        const currentUser = {email};
        if(email){
            fetch(`https://manufacturer-website-werver-a12.onrender.com/user/${email}`,{
                method:'PUT',
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data=>{
                console.log('data from backend jwt token api', data.token)
                const accessToken = data.token;
                localStorage.setItem('accessToken', accessToken);
                setToken(accessToken);
                // console.log(accessToken);
            })
        }

    },[user])
    return (
        [token]
    );
};

export default useToken;