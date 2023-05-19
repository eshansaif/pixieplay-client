import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';
import Banner from '../Banner/Banner';
import TabSubCategory from '../TabSubCategory/TabSubCategory';

const Home = () => {
    useSetTitle("Home")
    return (
        <div>
            <Banner></Banner>
            <TabSubCategory></TabSubCategory>
        </div>
    );
};

export default Home;