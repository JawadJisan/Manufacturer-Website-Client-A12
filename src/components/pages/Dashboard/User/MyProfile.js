import { useState } from "react";
import { useForm } from "react-hook-form";
// import './AddReview.css'
import { FaFolderPlus } from "react-icons/fa";
import axios from "axios";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import ReactSpinner from "../../../Sheared/ReactSpinner";
import Swal from "sweetalert2";
import { FcBusinesswoman } from "react-icons/fc";
import { useQuery } from "react-query";



const MyProfile = ({ inputs, title }) => {
    const [user, loading, error] = useAuthState(auth);
    //   console.log(user);

   

    const [file, setFile] = useState("");
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageBBApiKey = '87dddf2da47f63b4b871952317bd5a8b';

    const onSubmit = async data => {
        console.log(data)
        const newDoc = { ...data, userName: user.displayName, email: user.email }

        // fetch('http://localhost:5000/createProfile', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json',
        //         authorization: `Bearer ${localStorage.getItem('accessToken')}`
        //     },
        //     body: JSON.stringify(newDoc)
        // })
        //     .then(res => res.json())
        //     .then(inserted => {
        //         if (inserted.insertedId) {
        //             Swal.fire(
        //                 'Congratss',
        //                 'Your Profile Create Successfully',
        //                 'success'
        //               )
        //               reset()
        //         }
        //         else {
        //             Swal.fire({
        //                 icon: 'error',
        //                 title: 'Oops...',
        //                 text: 'Something went wrong!',
        //               })
        //         }

        //     })
        fetch(`https://safe-falls-41750.herokuapp.com/createProfile/${user.email}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newDoc)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire(
                        'Congratss',
                        'Your Profile Updated Successfully',
                        'success'
                    )
                    reset()
                    refetch()
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })
    }
    const { data: services, isLoading, refetch } = useQuery(['userProfile', user?.email], () => fetch(`https://safe-falls-41750.herokuapp.com/userProfile/${user?.email}`, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()).then(data=>console.log(data)));
    if (isLoading) {
        return <ReactSpinner />
    }

    if (loading) {
        return <ReactSpinner />
    }

    return (
        <div className="  newContainer container">
            {/* <p>{services.displayName} </p> */}
            <div className="p-5 img-div">
                <img

                    src={user?.photoURL ? user?.photoURL : <FcBusinesswoman />}
                    alt=""
                />
            </div>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)} className="formInput myprofile formss finput ">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input required id="name" type="text" value={user.displayName} disabled placeholder="name"
                            {...register("name")} />
                    </div>

                    <div>
                        <label htmlFor="name">Email:</label>
                        <input required id="name" disabled value={user.email} type="text" placeholder="name"
                            {...register("name")} />
                    </div>
                    <div>
                        <label htmlFor="name">Education:</label>
                        <input required id="edu" type="text" placeholder={services ? services.edu : "Your Education" }
                            {...register("edu")} />
                    </div>
                    <div>
                        <label htmlFor="name">Location:(city/dist) </label>
                        <input required id="location" type="text" placeholder="Your Location"
                            {...register("location")} />
                    </div>
                    <div>
                        <label htmlFor="name">Phone: </label>
                        <input required id="number" type="number" placeholder="Your Number"
                            {...register("number")} />
                    </div>
                    <div>
                        <label htmlFor="name">Linkdin:</label>
                        <input required id="linkdin" type="text" placeholder="Your Linkdin Profile Link"
                            {...register("linkdin")} />
                    </div>
                    <div>
                        <label htmlFor="name">Addintional Info:</label>
                        <textarea className="w-full" required type="addiInfo" placeholder="Tell Us About Yourself"
                            {...register("addiInfo")} />
                    </div>



                    <input className="addBtn submitbtn" type="submit" value="UPDATE" />
                </form>


            </div>
        </div>
    );
};

export default MyProfile;