import React from 'react';
import { FaFacebook, FaInstagram, FaPeopleArrows, FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="container mx-auto py-8">
            <div className=" divider font-extrabold text-[#e0a82e] text-3xl"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Contact Us</span></div>
            <div className="bg-white shadow-md rounded-lg p-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="text-gray-800">
                        <h3 className="text-xl font-bold mb-2">Reach Out to Us</h3>
                        <p className="mb-4">Feel free to contact us if you have any questions, suggestions, or inquiries. We are here to assist you!</p>
                        <ul className="mb-4 items-center justify-center">
                            <li className="flex items-center mb-2">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 13a1 1 0 11-2 0 1 1 0 012 0zm-1-2a1 1 0 100-2 1 1 0 000 2z" />
                                </svg>
                                <span>+1 (123) 456-7890</span>
                            </li>
                            <li className="flex items-center mb-2">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 3a1 1 0 011 1v5h3a1 1 0 110 2h-3v4a1 1 0 11-2 0v-4H6a1 1 0 010-2h3V4a1 1 0 011-1z" />
                                </svg>
                                <span>contact@car-toy-shop.com</span>
                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 018 8c0 3.368-2.683 7-8 10-5.316-3-8-6.632-8-10a8 8 0 018-8zm1 13a1 1 0 100-2 1 1 0 000 2zm-1-2a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                                <span>St. Robert, MO 65584-5678.</span>

                            </li>
                            <li className="flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 2a8 8 0 018 8c0 3.368-2.683 7-8 10-5.316-3-8-6.632-8-10a8 8 0 018-8zm1 13a1 1 0 100-2 1 1 0 000 2zm-1-2a1 1 0 110-2 1 1 0 010 2z" />
                                </svg>
                                1234 NW Bobcat Lane
                            </li>
                        </ul>
                        <h3 className="text-xl font-bold mb-2">Find Us On</h3>
                        <p className="mb-4">Feel free to contact us if you have any questions, And Be connected us the below Platforms!</p>
                        <ul className="mb-4 flex items-center justify-start">
                            <FaFacebook className="w-6 h-6 mr-2"></FaFacebook>
                            <FaYoutube className="w-6 h-6 mr-2"></FaYoutube>
                            <FaInstagram className="w-6 h-6 mr-2"></FaInstagram>
                            <FaTwitter className="w-6 h-6 mr-2"></FaTwitter>

                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold mb-2">Send Us a Message</h3>
                        <div>
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-800 font-bold mb-2">Name</label>
                                <input type="text" id="name" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border" placeholder="Enter your name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800 font-bold mb-2">Email</label>
                                <input type="email" id="email" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border" placeholder="Enter your email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-800 font-bold mb-2">Message</label>
                                <textarea id="message" className="w-full border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500 border" rows="5" placeholder="Enter your message"></textarea>
                            </div>
                            <button className=" hover:bg-yellow-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline btn btn-primary" type="submit">Send Message</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
