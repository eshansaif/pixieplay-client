import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';

const AllToys = () => {
    useSetTitle("All Toys")
    const toysData = useLoaderData();
    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);

    // Filter toys based on the search term
    const filteredToys = toysData.filter(toy =>
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const shownRowCount = showAll ? filteredToys.length : Math.min(filteredToys.length, 20);
    const isShowAllDisabled = filteredToys.length <= 20;

    return (
        <div className='my-10 mx-16'>
            <div className="flex justify-end">
                {/* Search input */}
                <div className="form-control">
                    <div className="input-group">
                        <label className="input-group input-group-lg">
                            <span className="bg-primary">Search</span>
                            <input
                                value={searchTerm}
                                onChange={handleSearch}
                                type="text"
                                placeholder="Search By Name"
                                className="input input-bordered"
                            />
                        </label>
                    </div>
                </div>
            </div>

            {/* Display the number of shown rows */}
            <p className="mt-2">
                Showing {shownRowCount} out of {filteredToys.length} rows
                {/* Toggle Show All button */}
                <button
                    className="btn btn-primary btn-sm ml-4"
                    onClick={toggleShowAll}
                    disabled={isShowAllDisabled}
                >
                    {showAll ? 'Show Less' : 'Show All'}
                </button>
            </p>
            <div className="overflow-x-auto w-full mt-3">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>

                            <th>Photo Image</th>
                            <th>Seller</th>
                            <th>Toy Name</th>
                            <th>Sub Category</th>
                            <th>Price</th>
                            <th>Available Quantity</th>
                            <th>Action</th>

                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            filteredToys.slice(0, shownRowCount).map(toy => <tr key={toy._id}>

                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={toy.pictureURL} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    Added By Supplier
                                    <br />
                                    <span className="badge badge-ghost badge-lg">{toy.sellerName}</span>
                                </td>
                                <td>{toy.toyName.length > 20 ? toy.toyName.substring(0, 20) + "......" : toy.toyName}</td>
                                <td>{toy.subCategory}</td>
                                <td>{toy.price}</td>
                                <td>{toy.quantity}</td>
                                <th>
                                    <Link to={`/toy/${toy._id}`}><button className="btn btn-primary btn-xs">View Details</button></Link>
                                </th>

                            </tr>)
                        }


                    </tbody>
                    {/* foot */}
                    {/* <tfoot>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </tfoot> */}

                </table>
            </div>
        </div>
    );
};

export default AllToys;