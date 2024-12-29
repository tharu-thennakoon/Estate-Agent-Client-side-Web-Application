import React from 'react';
import './Home.css';
import background from '../assets/background.jpg';
import SearchForm from '../components/SearchForm';

const Home = () => {
  return (
    <div className="home-page" style={{ backgroundImage: `url(${background})` }}>
      <div className="content">
        <h1>Explore Sri Lanka's Best Properties</h1>
        <p>From stunning beachfront villas to cozy city apartments, discover a diverse range of homes in Sri Lanka to suit your lifestyle.</p>
      </div>
      <div className="search-box">
        <SearchForm />
      </div>
    </div>
  );
};

export default Home;
