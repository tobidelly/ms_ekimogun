import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Crown, ScrollText, Calendar, Users, Building } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BookTicket from '../components/BookTicket';
import SponsorForm from '../components/SponsorForm';

const Event2025 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "https://images.unsplash.com/photo-1624383045192-cf512eb9d78c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmlnZXJpYSUyMHdvbWVufGVufDB8fDB8fHww",
    "https://th.bing.com/th/id/OIP.tXJNP09ctcCSNKtTd9U3NQHaEK?w=331&h=186&c=7&r=0&o=5&pid=1.7",
    "https://th.bing.com/th/id/OIP.reb6wPQemzk7liDTdgp6tQHaE8?w=279&h=186&c=7&r=0&o=5&pid=1.7",
    "http://ts3.mm.bing.net/th?id=OIP.OaR1hYKu6ySJNC5nyPYB5QHaE8&pid=15.1",
    "https://th.bing.com/th/id/OIP.NeuT8eUSNaYFcfZ-y3IH2QHaFW?w=259&h=187&c=7&r=0&o=5&pid=1.7",
    "http://ts4.mm.bing.net/th?id=OIP.pMOVWTYMA0KeU9X9I0bN4gHaE8&pid=15.1"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
        <div className="absolute top-0 w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute w-full h-full transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-black opacity-50"></div>
          
          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-white w-6'
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-bold text-5xl mb-6">
                  Miss Ekimogun 2025
                  <Crown className="inline-block ml-2 mb-2" size={40} />
                </h1>
                <p className="text-white text-lg mb-8">
                  Celebrating Our Heritage, Empowering Our Future
                </p>
                <a
                  href="#book-ticket"
                  className="bg-purple-600 text-white font-bold px-6 py-4 rounded-full hover:bg-purple-700 transition-colors duration-200 inline-block"
                >
                  Book Tickets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To showcase and celebrate the rich cultural heritage of Ondo Kingdom while empowering 
                young women to become ambassadors of positive change in their communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To create a platform that promotes cultural preservation, women empowerment, and 
                sustainable community development through the celebration of beauty and intelligence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Letter */}
      <section id="chairman" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-[#f9f7f1] p-12 rounded-lg shadow-xl">
            <div className="text-center mb-8">
              <ScrollText size={40} className="text-purple-600 mx-auto" />
            </div>
            <div className="font-serif">
              <h2 className="text-4xl font-bold text-center mb-8">From the Chairman</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Dear Contestants and Supporters,
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                It is with great pleasure that I welcome you to the 2025 edition of Miss Ekimogun. 
                This year marks a special milestone in our journey of celebrating the beauty, 
                intelligence, and cultural heritage of Ondo Kingdom.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our pageant has grown beyond a beauty contest to become a platform for empowering 
                young women and promoting our rich cultural heritage. The Miss Ekimogun crown 
                represents not just beauty, but leadership, intelligence, and commitment to 
                community service.
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                I invite you to be part of this transformative journey as we continue to build 
                bridges between tradition and modernity, empowering the next generation of 
                leaders from Ondo Kingdom.
              </p>
              <div className="text-right">
                <p className="font-bold mb-2">Hon Idris Mamukuyomi</p>
                <p className="text-gray-600">Chairman, Miss Ekimogun Organization</p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Registration for Miss Ekimogun 2025 */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="w-full md:w-1/2 relative"> 
              <img 
                src="https://images.unsplash.com/photo-1534143826428-81fc61582afd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YmVhdXR5JTIwbW9kZWxzfGVufDB8fDB8fHww"
                alt="Miss Ekimogun" 
                className="w-full h-full object-cover" 
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>
            </div>

            <div className="w-full md:w-1/2 p-12">
              <h2 className="mb-8 font-bold leading-tight text-gray-800">
                <span className="block text-[5rem] md:text-[5rem] font-montserrat italic text-purple-700 leading-tight animate-letters">
                  <div className="animate-letters">
                    <span>D</span><span>o</span><span>&nbsp;</span>
                    <span>y</span><span>o</span><span>u</span><span>&nbsp;</span>
                    <span>h</span><span>a</span><span>v</span><span>e</span><span>&nbsp;</span>
                    <span>w</span><span>h</span><span>a</span><span>t</span><span>&nbsp;</span>
                    <span>i</span><span>t</span><span>&nbsp;</span>
                    <span>t</span><span>a</span><span>k</span><span>e</span><span>s</span>
                    <span>&nbsp;</span><span>t</span><span>o</span><span>&nbsp;</span>
                    <span>b</span><span>e</span><span>c</span><span>o</span><span>m</span><span>e</span>
                  </div>
                </span>
                
                <span className="block text-6xl md:text-8xl mt-4 animate-textColorChange">
                  Miss Ekimogun 2025
                </span>
              </h2>
              <Link 
                to="/register2025" 
                className="bg-purple-600 text-white font-bold px-6 py-4 rounded-lg hover:bg-purple-700 transition-colors duration-200 inline-block"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Event Details */}
      <section id="event" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Calendar size={32} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Date & Time</h3>
              <p className="text-gray-600">March 15, 2025<br />6:00 PM WAT</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Building size={32} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Venue</h3>
              <p className="text-gray-600">Ondo Kingdom Cultural Center<br />Ondo State, Nigeria</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Users size={32} className="text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Capacity</h3>
              <p className="text-gray-600">1,000 Guests<br />Limited Seating Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Book Ticket Section */}
      <BookTicket />

      {/* Partners & Sponsors */}
      <section id="partners" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partners & Sponsors</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 1</span>
            </div>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Partner 2</span>
            </div>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Sponsor 1</span>
            </div>
            <div className="bg-gray-100 h-32 rounded-lg flex items-center justify-center">
              <span className="text-gray-500">Sponsor 2</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Form */}
      <section id="sponsorform">
        <SponsorForm />
      </section>

      <Footer />
    </div>
  );
};

export default Event2025;