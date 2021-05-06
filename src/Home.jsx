import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home_main">
        {/* navbar */}
        <Navbar />
        {/* banner */}
        <Banner />
      </div>
    </>
  );
};

export default Home;
