import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const AddToy = () => {
    useSetTitle("Add Toy")

    const { user } = useContext(AuthContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = newToy => {

        // send data to the server
        fetch("http://localhost:5000/toys", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    swal("Toy Added Successfully!");
                    newToy.reset();
                }
            })
    };
    return (

        <div className="bg-slate-100 py-12">
            <h3 className='text-6xl font-bold text-[#e0a82e] text-center mb-4'>Add New Product</h3>
            <form onSubmit={handleSubmit(onSubmit)}  >
                <div className="w-2/3 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control md:col-span-2">
                        <label className="input-group input-group-vertical">
                            <span>Select Sub Category</span>
                            <select className="select select-bordered w-full" {...register("subCategory")}>
                                <option value="Sports Car">Sports Car</option>
                                <option value="Truck">Truck</option>
                                <option value="Mini Fire Truck">Mini Fire Truck</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Name</span>
                            <input {...register("toyName", { required: true })} type="text" placeholder="Toy Name" className="input input-bordered" />
                            {errors.toyName && errors.toyName.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Picture URL</span>
                            <input {...register("pictureURL", { required: true })} type="text" placeholder="Toy Picture URL" className="input input-bordered" />
                            {errors.pictureURL && errors.pictureURL.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Name</span>
                            <input defaultValue={user?.displayName} {...register("sellerName", { required: true })} type="text" placeholder="Seller Name" className="input input-bordered" />
                            {errors.sellerName && errors.sellerName.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Email</span>
                            <input defaultValue={user?.email} {...register("sellerEmail", { required: true })} type="text" placeholder="Seller Email" className="input input-bordered" />
                            {errors.sellerEmail && errors.sellerEmail.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Price</span>
                            <input {...register("price", { required: true })} type="number" placeholder="Price" className="input input-bordered" />
                            {errors.price && errors.price.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Rating</span>
                            <input {...register("rating", { required: true })} type="text" placeholder="Rating" className="input input-bordered" />
                            {errors.rating && errors.rating.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Available Quantity</span>
                            <input {...register("quantity", { required: true })} type="number" placeholder="Quantity" className="input input-bordered" />
                            {errors.quantity && errors.quantity.type === "required" && <span className="bg-red-500">This field is required</span>}
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Description</span>
                            <textarea {...register("description", { required: true })} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
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

export default AddToy;