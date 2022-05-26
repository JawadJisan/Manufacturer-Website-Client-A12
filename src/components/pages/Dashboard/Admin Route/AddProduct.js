import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaFolderPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";


const AddProduct = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [imageUrl, setImageUrl] = useState('');
  console.log(imageUrl, 'srate')
  const { register, formState: { errors }, handleSubmit, reset } = useForm();

  const imageBBApiKey = '87dddf2da47f63b4b871952317bd5a8b';

  const onSubmit = async data => {
    const newDoc = {...data, image:imageUrl}
    fetch('https://safe-falls-41750.herokuapp.com/addParts',{
                    method: 'POST',
                    headers:{
                        'content-type':'application/json',
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(newDoc)
                })
                .then(res=>res.json())
                .then(inserted=>{
                    console.log(inserted, 'admin add product')
                  if(inserted){
                    Swal.fire(
                        'Congratss',
                        'New Tools  Added Successfully',
                        'success'
                    )
                    reset()
                  }
                  else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Failed to add a New Tools!!!',
                    })                  }
                    reset()
                })
  }


  const handleImage = event =>{
    setFile(event.target.files[0]);
    const image = event.target.files[0];
  
    const formData = new FormData();

    formData.set('image', image);
    axios.post('https://api.imgbb.com/1/upload?key=87dddf2da47f63b4b871952317bd5a8b', formData)
    .then(res=>{
      console.log(res, 'image bb url')
      setImageUrl(res.data.data.display_url)
      console.log(res.data.data.display_url)

    })
  }

  return (
    <div className=" newContainer container">
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
          <form onSubmit={handleSubmit(onSubmit)} className="formInput finput formss ">
            <div>
            <label htmlFor="name">Product Name</label>
            <input required id="name" type="text" placeholder="name" 
            {...register("name")}/>
            </div>
            <div>
            <label htmlFor="description">Product Description</label>
            <textarea className="w-full" required id="description" type="text" placeholder="Product Details" 
            {...register("description")}/>
            </div>
            <div>
            <label htmlFor="availableQuantity">Available quantity</label>
            <input className="w-full" required id="availableQuantity" type="text" placeholder="Available Quantity" 
            {...register("availableQuantity")}/>
            </div>
            <div>
            <label htmlFor="minOrderQuantity">Minimum Quantity</label>
            <input className="w-full" required id="minOrderQuantity" type="text" placeholder="Minimum Quantity" 
            {...register("minOrderQuantity")}/>
            </div>
            <div>
            <label htmlFor="price">Price</label>
            <input className="w-full" required id="price" type="text" placeholder="Price" 
            {...register("price")}/>
            </div>
            
            
            <input className="addBtn submitbtn" type="submit" value="Add Tools" />
          </form>

        
      </div>
    </div>
  );
};

export default AddProduct;