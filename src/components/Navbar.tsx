import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const is2025Page = location.pathname === '/2025';

  const mainNavItems = [
    { name: 'Home', href: '/' },
    { name: '2025', href: '/2025' },
    { name: 'History', href: '/history' },
    { name: 'Culture', href: '/culture' },
    { name: 'Register Now', href: '/#register', highlight: true },
  ];

  const event2025NavItems = [
    { name: 'From the Chairman', href: '#chairman' },
    { name: 'Event', href: '#event' },
    { name: 'Partners', href: '#partners' },
    { name: 'Sponsor', href: '#sponsorform' },
    { name: 'Book Tickets', href: '#book-ticket', highlight: true },
  ];

  const navItems = is2025Page ? event2025NavItems : mainNavItems;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-purple-800">Miss Ekimogun</Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`${
                  item.highlight
                    ? 'bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700'
                    : 'text-gray-700 hover:text-purple-600'
                } transition-colors duration-200`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`${
                  item.highlight
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-purple-50'
                } block px-3 py-2 rounded-md text-base font-medium`}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;