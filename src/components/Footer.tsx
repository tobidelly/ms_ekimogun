import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Miss Ekimogun</h3>
            <p className="text-gray-400">
              Celebrating the beauty, culture, and heritage of Ondo Kingdom since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/history" className="text-gray-400 hover:text-white">History</a></li>
              <li><a href="/culture" className="text-gray-400 hover:text-white">Culture</a></li>
              <li><a href="/team" className="text-gray-400 hover:text-white">Our Team</a></li>
              <li><a href="/#register" className="text-gray-400 hover:text-white">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Phone: +234 123 456 7890</li>
              <li>Email: info@missekimogun.com</li>
              <li>Ondo Kingdom Cultural Center</li>
              <li>Ondo State, Nigeria</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Miss Ekimogun. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;