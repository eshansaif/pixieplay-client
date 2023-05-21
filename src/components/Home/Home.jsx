import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import TabSubCategory from '../TabSubCategory/TabSubCategory';
import ImageGallery from '../Imagegallery/Imagegallery';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const Home = () => {
    useSetTitle("Home")
    return (
        <div>
            <Banner></Banner>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Photo Gallery</span></div>

            <ImageGallery></ImageGallery>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-[#181830] p-1 rounded-lg font-mono'>Shop by Category</span></div>
            <TabSubCategory></TabSubCategory>
        </div>
    );
};

export default Home;