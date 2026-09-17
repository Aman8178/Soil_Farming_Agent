import React from 'react';
import Navbar from '../components/Navbar';
import Detail from '../components/Detail';
import SoilAdvisor from '../components/SoilAdvisor';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-slate-50/50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Detail />
        <SoilAdvisor />
        <Freebook />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
