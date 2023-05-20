import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import TabSubCategory from '../TabSubCategory/TabSubCategory';

const Home = () => {
    useSetTitle("Home")
    return (
        <div>
            <Banner></Banner>

            <div className=" divider font-extrabold text-[#e0a82e] text-3xl mt-10 mb-10"><span className='bg-black p-1 rounded-lg font-mono'>Shop by Category</span></div>
            <TabSubCategory></TabSubCategory>
        </div>
    );
};

export default Home;