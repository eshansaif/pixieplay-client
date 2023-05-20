import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../providers/AuthProvider';

const AddToy = () => {

    const { user } = useContext(AuthContext);

    const { register, handleSubmit } = useForm();
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
                                <option value="sub-cat1">Sub-Category1</option>
                                <option value="sub-cat2">Sub-Category2</option>
                                <option value="sub-cat3">Sub-Category3</option>
                            </select>
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Name</span>
                            <input {...register("toyName")} type="text" placeholder="Toy Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Toy Picture URL</span>
                            <input {...register("pictureURL")} type="text" placeholder="Toy Picture URL" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Name</span>
                            <input defaultValue={user?.displayName} {...register("sellerName")} type="text" placeholder="Seller Name" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Seller Email</span>
                            <input defaultValue={user?.email} {...register("sellerEmail")} type="text" placeholder="Seller Email" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Price</span>
                            <input {...register("price")} type="number" placeholder="Price" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Rating</span>
                            <input {...register("rating")} type="number" placeholder="Rating" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Available Quantity</span>
                            <input {...register("quantity")} type="number" placeholder="Quantity" className="input input-bordered" />
                        </label>
                    </div>
                    <div className="form-control ">
                        <label className="input-group input-group-vertical">
                            <span>Description</span>
                            <textarea {...register("description")} placeholder="Description" className="textarea textarea-bordered textarea-lg w-full" ></textarea>
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