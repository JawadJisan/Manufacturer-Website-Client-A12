import { useState } from "react";
import { useForm } from "react-hook-form";
import './AddReview.css'
import { FaFolderPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";


const AddReview = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [imageUrl, setImageUrl] = useState('');
    console.log(imageUrl, 'srate')
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const imageBBApiKey = '87dddf2da47f63b4b871952317bd5a8b';

    const onSubmit = async data => {
        const newDoc = { ...data, image: imageUrl }
        fetch('https://safe-falls-41750.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(newDoc)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    Swal.fire(
                        'Congratss',
                        'Review Added Successfully',
                        'success'
                    )
                    reset()
                }
                else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to add a Review!!!',
                    })
                    reset();
                }

            })
    }


    const handleImage = event => {
        setFile(event.target.files[0]);
        const image = event.target.files[0];

        const formData = new FormData();

        formData.set('image', image);
        axios.post('https://api.imgbb.com/1/upload?key=87dddf2da47f63b4b871952317bd5a8b', formData)
            .then(res => {
                console.log(res, 'image bb url')
                setImageUrl(res.data.data.display_url)
                console.log(res.data.data.display_url)

            })
    }

    return (
        <div className="  newContainer container ">
            <div className="p-5 img-div">
                <img

                    src={
                        imageUrl
                            ? URL.createObjectURL(file)
                            // ? {imageUrl}
                            : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                />
            </div>
            <div className="">
                <div className="formInput imageUP">
                    <label htmlFor="file">
                        Image: <FaFolderPlus className="icon"></FaFolderPlus>
                    </label>
                    <input
                        type="file"
                        id="file"
                        // onChange={(e) => setFile(e.target.files[0])}
                        onChange={handleImage}
                        style={{ display: "none" }}
                    />
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="formInput finput  ">
                    <div className="formss">
                        <div>
                            <label htmlFor="name">Enter Your Name</label>
                            <input required id="name" type="text" placeholder="name"
                                {...register("name")} />
                        </div>
                        <div>
                            <label htmlFor="rating">Reitings</label>
                            <input required id="rating" type="text" placeholder="rating"
                                {...register("rating")} />
                        </div>

                       


                        <textarea required type="text" placeholder="Description"
                            {...register("type")} />

                        <input className="addBtn submitbtn" type="submit" value="Send" />
                    </div>
                </form>


            </div>
        </div>
    );
};

export default AddReview;