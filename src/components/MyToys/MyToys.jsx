import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';
import { FaEdit, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyToys = () => {
    useSetTitle("My Toys")
    const { user } = useContext(AuthContext);
    const { email } = user;

    const [myToys, setMyToys] = useState([]);
    const [sortOrder, setSortOrder] = useState('asc');
    const [sortedToys, setSortedToys] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/my-toys/${email}`)
            .then(response => response.json())
            .then(data => {
                setMyToys(data);
            })
    }, [user])

    // Sorting Asc and Desc
    const sortToys = (order) => {
        const sorted = [...filteredToys].sort((a, b) => {
            if (order === 'asc') {
                return a.price - b.price;
            } else {
                return b.price - a.price;
            }
        });

        setSortOrder(order);
        setSortedToys(sorted);
    };


    const [searchTerm, setSearchTerm] = useState('');
    const [showAll, setShowAll] = useState(false);

    // Filter toys based on the search term
    const filteredToys = myToys.filter(toy =>
        toy.toyName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    const displayedToys = sortedToys.length > 0 ? sortedToys : filteredToys;
    const shownRowCount = showAll ? displayedToys.length : Math.min(displayedToys.length, 20);
    const isShowAllDisabled = displayedToys.length <= 20;


    // Delete toy from DB
    const handleDelete = _id => {
        console.log(_id);
        swal({
            title: "Are you sure to Delete?",
            text: "Once deleted, you will not be able to recover this One!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then((willDelete) => {
                if (willDelete) {
                    fetch(`http://localhost:5000/toy/${_id}`, {
                        method: "DELETE",
                    })
                        .then(res => res.json())
                        .then(data => {
                            // console.log(data)
                            if (data.deletedCount > 0) {
                                swal(`Poof! Toy (${_id}) has been deleted!`, {
                                    icon: "success",
                                });
                            }

                            const remaining = myToys.filter(toy => toy._id !== _id);
                            setMyToys(remaining)

                        })
                } else {
                    swal("You will not be deleted!");
                }
            });
    }
    return (
        <div>
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
                <div className="flex justify-between items-center">
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
                    <p>
                        {/* Sort by Ascending and Descending Based on the Price */}
                        <select
                            value={sortOrder}
                            onChange={(e) => sortToys(e.target.value)}
                            className="input input-bordered"
                        >
                            <option value="asc">Sort by Price (Low to High)</option>
                            <option value="desc">Sort by Price (High to Low)</option>
                        </select>
                    </p>

                </div>
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
                                displayedToys.slice(0, shownRowCount).map(toy => <tr key={toy._id}>

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
                                    <td className="tooltip" data-tip={toy.toyName}>{toy.toyName.length > 25 ? toy.toyName.substring(0, 25) + "...." : toy.toyName}</td>
                                    <td>{toy.subCategory}</td>
                                    <td>{toy.price} BDT</td>
                                    <td>{toy.quantity}</td>
                                    <th class="flex flex-col gap-1">
                                        <div className="btn-group">
                                            <Link to={`/toy/${toy._id}`}><button className="btn btn-xs btn-success tooltip" data-tip="View"> <FaEye></FaEye></button></Link>
                                            <Link to={`/update-toy/${toy._id}`}><button className="btn btn-xs btn-warning tooltip" data-tip="Update"> <FaEdit></FaEdit> </button></Link>
                                            <button onClick={() => handleDelete(toy._id)} className="btn btn-xs btn-error tooltip font-bold rounded-md" data-tip="Delete">X</button>
                                        </div>
                                    </th>

                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyToys;