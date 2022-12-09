import React from 'react';
import Project from '../Projects/Project';
import About from './About';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Project></Project>
        </div>
    );
};

export default Home;