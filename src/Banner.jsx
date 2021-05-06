import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <header
        className="banner"
        style={{
          backgroundSize: 'cover',
          backgroundImage: `url("https://piunikaweb.com/wp-content/uploads/2019/06/netflix_logo_black_background_banner-750x354.png")`,
          backgroundPosition: 'center center',
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">Movie Name</h1>
          <div className="banner_button">
            <button>Play</button>
            <button>My List</button>
          </div>
          <h1>This is the film discerption</h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
