import React from 'react';
import useSetTitle from '../../hooks/useSetTitle';

const Home = () => {
    useSetTitle("Home")
    return (
        <div>
            <h1>This is the Home</h1>
        </div>
    );
};

export default Home;