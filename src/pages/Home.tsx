import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PastQueens from '../components/PastQueens';
import Impact from '../components/Impact';
import Culture from '../components/Culture';
import Register from '../components/Register';
import Contact from '../components/Contact';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PastQueens />
        <Impact />
        <Culture />
        <Register />
        <Contact />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default Home;