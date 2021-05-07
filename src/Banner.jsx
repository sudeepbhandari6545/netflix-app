import React from 'react';
import './Banner.css';

const Banner = () => {
  function truncate(str, n) {
    return str?.lengtn > n ? str.substr(0, n - 1) + '...' : str;
  }
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
          <div className="banner_buttons">
            <button className="banner_button">Play</button>
            <button className="banner_button">My List</button>
          </div>
          <h1>
            {truncate(
              `This is the film discerption This is the film discerption This is
            the film discerption This is the film discerption This is the film
            discerption This is the film discerption This is the film
            discerption This is the film discerption This is the film
            discerption This is the film discerption This is the film discerption This is the film
            discerption This is the film discerption This is the film
            discerption This is the film discerption This is the film discerption This is the film
            discerption This is the film discerption`,
              50
            )}
          </h1>
        </div>
        <div className="banner--fadeBottom" />
      </header>
    </>
  );
};

export default Banner;
