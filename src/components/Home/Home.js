import React from 'react';
import Blog from '../Blogs/Blog';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Iknow from '../Iknow/Iknow';
import Projects from '../Projects/Projects';
import Reviews from '../Reviews/Reviews';
import Service from '../Service/Service';
import StartProject from '../StartProject/StartProject';
import Strategy from '../Strategy/Strategy';
import About from './About';
import Hero from './Hero';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Projects></Projects>
            <Iknow></Iknow>
            <Strategy></Strategy>
            {/* <Service></Service> */}
            {/* <Blog></Blog> */}
            <Reviews></Reviews>
            {/* <StartProject></StartProject> */}
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;