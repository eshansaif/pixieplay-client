import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useSetTitle from '../../hooks/useSetTitle';
import { FaHandHoldingHeart, FaMailBulk, FaMoneyBillWave, FaPeopleCarry, FaSearchPlus, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';

const ViewDetails = () => {
    const toyDetails = useLoaderData();
    useSetTitle(`${toyDetails.toyName}`);
    console.log(toyDetails);
    const { pictureURL, subCategory, toyName, sellerName, sellerEmail, price, rating, quantity, description } = toyDetails;
    return (
        <div className="flex justify-center my-10">
            <div className="card md:w-2/3 bg-base-100 shadow-xl">
                <figure><img src={pictureURL} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{toyName}</h2>
                    <div className="grid md:grid-cols-2 font-mono font-semibold">
                        <p className="flex items-center"><FaPeopleCarry className="me-2"></FaPeopleCarry>Seller Name: {sellerName}</p>
                        <p className="flex items-center"><FaMailBulk className="me-2"></FaMailBulk>Seller Email: {sellerEmail}</p>
                        <p className="flex items-center"><FaMoneyBillWave className="me-2"></FaMoneyBillWave>Price: {price} BDT</p>
                        <p className="flex items-center"> <FaHandHoldingHeart className="me-2"></FaHandHoldingHeart>Rating: <Rating
                            initialRating={rating}
                            readonly
                            placeholderSymbol={<FaStar className="icon" />}
                            fullSymbol={<FaStar color="#FFD700" className="icon" />}
                            emptySymbol={<FaStar color="#C4C4C4" className="icon" />}
                        /></p>
                        <p className="flex items-center"> <FaSearchPlus className="me-2"></FaSearchPlus>Available Quantity: {quantity} Items </p>
                    </div>
                    <p className='font-mono'><span className="font-semibold">Toy Details:</span> {description}</p>

                    <div className="card-actions justify-end">
                        <Link to="/all-toys"><button className="btn btn-primary">View All Toys</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;