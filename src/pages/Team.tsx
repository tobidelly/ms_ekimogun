import React from 'react';
import { Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const teamMembers = [
  {
    name: 'Hon Idris Mamukuyomi',
    role: 'Chairman/CEO',
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Leading the Miss Ekimogun organization with over 20 years of experience in cultural promotion and event management.'
  },
  {
    name: 'Mrs. Folake Ogunleye',
    role: 'Public Relations Officer',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Managing public communications and media relations with expertise in brand storytelling.'
  },
  {
    name: 'Mr. Tunde Ajayi',
    role: 'Head of Partnerships',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: "Building strategic partnerships to enhance the pageant's impact and reach."
  },
  {
    name: 'Ms. Bisi Adebayo',
    role: 'Brand Manager',
    image: 'https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Developing and maintaining the Miss Ekimogun brand identity and marketing strategy.'
  },
  {
    name: 'Mr. Kayode Oladipo',
    role: 'Social Media Manager',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Managing our digital presence and engaging with our online community.'
  },
  {
    name: 'Mrs. Yetunde Adeola',
    role: 'Models Liaison Officer',
    image: 'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    bio: 'Coordinating with contestants and providing guidance throughout their journey.'
  }
];

const Team = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[60vh]">
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
          }}
        >
          <span className="w-full h-full absolute opacity-50 bg-black"></span>
        </div>
        
        <div className="container relative mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
              <div>
                <h1 className="text-white font-bold text-5xl mb-6">
                  Meet Our Team
                  <Users className="inline-block ml-2 mb-2" size={40} />
                </h1>
                <p className="text-white text-lg">
                  The Dedicated Professionals Behind Miss Ekimogun
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Team;