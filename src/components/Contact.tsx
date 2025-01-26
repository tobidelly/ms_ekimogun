import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Phone size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">+234 123 456 7890</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <Mail size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">info@missekimogun.com</p>
          </div>
          
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <MapPin size={32} className="text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Address</h3>
            <p className="text-gray-600">Ondo Kingdom Cultural Center<br />Ondo State, Nigeria</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;