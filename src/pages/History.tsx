import React from 'react';
import { Scroll, Crown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const History = () => {
  const timeline = [
    {
      year: '2010',
      title: 'The Beginning',
      description: 'First Miss Ekimogun pageant was held at the Ondo Kingdom Cultural Center.'
    },
    {
      year: '2015',
      title: 'Growth & Recognition',
      description: 'The pageant gained statewide recognition and introduced cultural preservation programs.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Adapted to virtual events during the global pandemic while maintaining cultural connections.'
    },
    {
      year: '2025',
      title: 'International Reach',
      description: 'Expanding our platform to showcase Ondo culture to the global community.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-bold text-5xl mb-6">
                  Our History
                  <Scroll className="inline-block ml-2 mb-2" size={40} />
                </h1>
                <p className="text-white text-lg">
                  A Journey Through Time: The Evolution of Miss Ekimogun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex mb-12 relative">
                <div className="w-24 flex-shrink-0 text-right pr-8">
                  <span className="text-purple-600 font-bold">{item.year}</span>
                </div>
                <div className="w-px bg-purple-200 relative">
                  <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-[7px]"></div>
                </div>
                <div className="flex-grow pl-8">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Crown className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-8">Our Legacy</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Since its inception, Miss Ekimogun has been more than just a beauty pageant. 
              It has become a symbol of cultural preservation, women empowerment, and community 
              development in Ondo Kingdom. Our queens have gone on to become ambassadors of 
              change, leading various initiatives that have positively impacted our community.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">15+</h3>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">50+</h3>
                <p className="text-gray-600">Community Projects</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">1000+</h3>
                <p className="text-gray-600">Lives Impacted</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default History;