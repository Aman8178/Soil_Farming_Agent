import React from 'react';
import Navbar from '../components/Navbar';
import Detail from '../components/Detail';
import SoilAdvisor from '../components/SoilAdvisor';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Detail />
      <SoilAdvisor />
      <Freebook />
      <Footer />
    </div>
  );
}

export default Home;
