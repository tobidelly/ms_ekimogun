import React, { useState } from 'react';
import { Building, Mail, Phone, User } from 'lucide-react';

const SponsorForm = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    sponsorshipLevel: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="sponsor" className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <Building className="w-16 h-16 text-purple-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Sponsor Miss Ekimogun 2025</h2>
            <p className="text-gray-600">
              Join us in celebrating culture and empowering young women. Partner with Miss Ekimogun 2025 
              for a unique opportunity to showcase your brand.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 mb-2" htmlFor="companyName">
                  Company Name
                </label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="contactPerson">
                  Contact Person
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 text-gray-400" size={20} />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="sponsorshipLevel">
                Sponsorship Level of Interest
              </label>
              <select
                id="sponsorshipLevel"
                name="sponsorshipLevel"
                value={formData.sponsorshipLevel}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                required
              >
                <option value="">Select a level</option>
                <option value="platinum">Platinum Sponsor</option>
                <option value="gold">Gold Sponsor</option>
                <option value="silver">Silver Sponsor</option>
                <option value="bronze">Bronze Sponsor</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Additional Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                rows={4}
                placeholder="Tell us about your organization and sponsorship goals..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 transition-colors duration-200"
            >
              Submit Sponsorship Interest
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SponsorForm;