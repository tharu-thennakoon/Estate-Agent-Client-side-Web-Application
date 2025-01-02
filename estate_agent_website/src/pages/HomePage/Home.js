import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../../components/SearchBar/SearchBar';
import './Home.css';
import backgroundImage from '../../assets/background.jpg';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToFilterPage = (query) => {
    navigate('/filter', { state: { query } }); // Pass location and tenure to FilterPage
  };

  return (
    <div className="homePage">
      <div
        className="imgcontainer"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >
        <div className="textcontainer">
          <div className="wrapper">
            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
            <p>Find your ideal property effortlessly and make your dream home a reality.</p>
            {/* SearchBar with only location and tenure */}
            <SearchBar navigateToFilterPage={navigateToFilterPage} advanced={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
