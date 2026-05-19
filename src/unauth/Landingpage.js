import React from 'react';
import './Landingpage.css';
import Navbar from './component/navbar';
import Bumpups from './component/Bumpups';
import Timestamps from './component/Timestamps';
import Footer from './component/Footer';

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <div className="landing-container">
        <div className="landing-content">
          <h1 className="landing-title">Hello Landing Page</h1>
          <p className="landing-subtitle">Welcome to your landing page</p>
        </div>
      </div>
      <Bumpups />
      <Timestamps />
      <Footer />
    </>
  );
};

export default Landingpage;
