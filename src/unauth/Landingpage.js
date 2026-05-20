import React from 'react';
import './Landingpage.css';
import Navbar from './component/navbar';
import Timestamps from './component/Timestamps';
import Bumpups from './component/Bumpups';
import Footer from './component/Footer';

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Timestamps />
      <Bumpups />
      <Footer />
    </>
  );
};

export default Landingpage;
