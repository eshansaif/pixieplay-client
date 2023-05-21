import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link, useLocation } from 'react-router-dom';
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";

const Header = () => {
    const { user, logout } = useContext(AuthContext);
    const location = useLocation();

    // console.log(user);

    const handleLogout = () => {
        logout()
            .then((result) => {
                console.log("Logged out successfully");
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div>
            {/* <div className="bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">Hero</a>
            </div> */}
            <div className="navbar bg-[#570df816] ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="font-medium menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                            <li><Link to="/all-toys" className={location.pathname === '/all-toys' ? 'active' : ''}>All Toys</Link></li>
                            {
                                user && <>
                                    <li><Link to="/my-toys" className={location.pathname === '/my-toys' ? 'active' : ''}>My Toys</Link></li>
                                    <li><Link to="/add-toy" className={location.pathname === '/add-toy' ? 'active' : ''}>Add a Toy</Link></li>
                                </>
                            }
                            <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
                            <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                            <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                        </ul>
                    </div>
                    <div className=" md:flex justify-center">
                        <img className="img-responsive w-16 ms-8 md:ms-0" src="/animated-toy-image-0038.gif" alt="" />
                        <Link to="/" className="btn btn-ghost normal-case text-2xl md:text-3xl font-extrabold text-primary font-mono"> PixiePlay</Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="font-medium menu menu-horizontal px-1">
                        <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link></li>
                        <li><Link to="/all-toys" className={location.pathname === '/all-toys' ? 'active' : ''}>All Toys</Link></li>
                        {
                            user && <>
                                <li><Link to="/my-toys" className={location.pathname === '/my-toys' ? 'active' : ''}>My Toys</Link></li>
                                <li><Link to="/add-toy" className={location.pathname === '/add-toy' ? 'active' : ''}>Add a Toy</Link></li>
                            </>
                        }
                        <li><Link to="/blogs" className={location.pathname === '/blogs' ? 'active' : ''}>Blogs</Link></li>
                        <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</Link></li>
                        <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</Link></li>

                    </ul>
                </div>
                <div className="navbar-end md:flex">
                    {
                        user ? <label tabIndex={0} className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom me-2" data-tip={user?.displayName} >
                            <div className="w-12 rounded-full">

                                <img src={user?.photoURL} alt="" />

                            </div>
                        </label> :
                            <span></span>
                    }
                    {
                        user ? <button onClick={handleLogout} className="btn btn-ghost bg-[#e0a82e] hover:bg-yellow-700 text-white font-bold"> <FaSignOutAlt className="me-1"></FaSignOutAlt> Logout</button> : <Link to="/login" className="btn btn-ghost bg-[#e0a82e] hover:bg-yellow-700 text-white font-bold"> <FaSignInAlt className='me-1'></FaSignInAlt> Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;