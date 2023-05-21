import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import swal from 'sweetalert';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UpdateToy = () => {
    useSetTitle("Update Toy")
    const navigation = useNavigate();
    const { user } = useContext(AuthContext);

    const toyData = useLoaderData();

    const { _id, pictureURL, subCategory, toyName, sellerName, sellerEmail, price, rating, quantity, description } = toyData;

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = newToy => {

        // update data to the server
        fetch(`http://localhost:5000/toy/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.matchedCount) {
                    swal("Wow!", "You have Updated the Toy Successfully!", "success");
                    navigation("/my-toys");
                }
            })
    };
    return (

        <div className="bg-slate-100 py-12">
            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Update Product</span></div>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control md:col-span-2">
                        <label className="input-group input-group-vertical">
                            <span>Select Sub Category</span>
                            <select defaultValue={subCategory} className="select select-bordered w-full" {...register("subCategory")}>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Name</span>
                            <input defaultValue={toyName} {...register("toyName", { required: true })} type="text" placeholder="Toy Name" className="input input-bordered" />
                            {errors.toyName && errors.toyName.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Picture URL</span>
                            <input defaultValue={pictureURL} {...register("pictureURL", { required: true })} type="text" placeholder="Toy Picture URL" className="input input-bordered" />
                            {errors.pictureURL && errors.pictureURL.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Name</span>
                            <input defaultValue={sellerName} {...register("sellerName", { required: true })} type="text" placeholder="Seller Name" className="input input-bordered" />
                            {errors.sellerName && errors.sellerName.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Email</span>
                            <input defaultValue={sellerEmail} {...register("sellerEmail", { required: true })} type="text" placeholder="Seller Email" className="input input-bordered" />
                            {errors.sellerEmail && errors.sellerEmail.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Price</span>
                            <input defaultValue={price} {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                            {errors.price && errors.price.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Rating</span>
                            <input defaultValue={rating} {...register("rating", { required: true })} type="text" placeholder="Rating" className="input input-bordered" />
                            {errors.rating && errors.rating.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Available Quantity</span>
                            <input defaultValue={quantity} {...register("quantity", { required: true })} type="number" placeholder="Quantity" className="input input-bordered" />
                            {errors.quantity && errors.quantity.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Description</span>
                            <textarea defaultValue={description} {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
                            {errors.description && errors.description.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>

                </div>
                <div className="w-2/3 mx-auto mt-4">
                    <input className="btn btn-block mx-auto" type="submit" value="Add Product" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToy;