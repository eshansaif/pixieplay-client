import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import TabSubCategory from '../TabSubCategory/TabSubCategory';
// import ImageGallery from '../Imagegallery/Imagegallery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import ImageGallery from '../Imagegallery/Imagegallery';
import Testimonials from '../Testimonials/Testimonials';
import Contact from '../Contact/Contact';
// ..
AOS.init();

const Home = () => {
    useSetTitle("Home")
    return (
        <div>
            <Banner></Banner>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Photo Gallery</span></div>

            <div className='md:mx-10'>
                <ImageGallery></ImageGallery>
            </div>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Shop by Category</span></div>
            <TabSubCategory></TabSubCategory>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Customer Testimonials</span></div>
            <div className='md:mx-10'>
                <Testimonials></Testimonials>
            </div>

            <div className='md:mx-10'>
                <Contact></Contact>
            </div>
        </div>
    );
};

export default Home;