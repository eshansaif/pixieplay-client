import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-[#570df816]  text-base-content">
                <div>
                    <Link to="/">
                        <img className="img-responsive w-16 ms-8 md:ms-0" src="/animated-toy-image-0038.gif" alt="" />
                        <p className="font-bold text-[#570df8]">PixiePlay Ltd.</p>
                    </Link>
                    <p>Providing reliable and unique products since 2013</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="all-toys" className="link link-hover">All Toys</Link >
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to="/about" className="link link-hover">About us</Link>
                    <Link to="/contact" className="link link-hover">Contact</Link>
                    <Link to="/jobs" className="link link-hover">Jobs</Link>
                    <Link to="/blogs" className="link link-hover">Blogs</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
        </div >
    );
};

export default Footer;