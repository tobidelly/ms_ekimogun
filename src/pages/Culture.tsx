import React from 'react';
import { Landmark, Music, Palette } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Culture = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1590845947698-8924d7409b56?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-bold text-5xl mb-6">
                  Our Cultural Heritage
                  <Landmark className="inline-block ml-2 mb-2" size={40} />
                </h1>
                <p className="text-white text-lg">
                  Celebrating the Rich Traditions of Ondo Kingdom
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Elements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Music className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Traditional Music</h3>
              <p className="text-gray-600">
                Experience the rhythmic beats of Ondo Kingdom's traditional music, 
                from ceremonial drums to folk songs that tell our stories.
              </p>
            </div>
            <div className="text-center">
              <Palette className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Arts & Crafts</h3>
              <p className="text-gray-600">
                Discover the intricate artistry of our traditional crafts, 
                including weaving, beadwork, and ceremonial artifacts.
              </p>
            </div>
            <div className="text-center">
              <Landmark className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Historical Sites</h3>
              <p className="text-gray-600">
                Visit the landmarks that tell the story of our kingdom's rich 
                history and cultural significance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Traditional Attire */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Traditional Attire</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Traditional Attire"
                className="rounded-lg shadow-xl mb-8"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6">The Art of Dressing</h3>
              <p className="text-gray-600 mb-6">
                Our traditional attire is more than just clothing; it's a symbol of our 
                identity and heritage. Each pattern, color, and accessory tells a story 
                about our culture and traditions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Aso-oke (Hand-woven fabric)
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Traditional beads and jewelry
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Ceremonial headwear
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Annual Cultural Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Odun Oba</h3>
              <p className="text-gray-600">
                Annual festival celebrating the coronation anniversary of the Osemawe of Ondo Kingdom.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Ekimogun Day</h3>
              <p className="text-gray-600">
                A celebration of Ondo culture, featuring traditional dances, music, and exhibitions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">New Yam Festival</h3>
              <p className="text-gray-600">
                Traditional ceremony marking the harvest season and thanksgiving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;