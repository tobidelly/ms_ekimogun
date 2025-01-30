import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from './Assets/logo.png';

const Navbar: React.FC = () => {
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

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
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
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
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

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={`block text-base font-medium rounded-md px-3 py-2 ${
                  item.highlight
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-700 hover:bg-purple-50'
                }`}
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
