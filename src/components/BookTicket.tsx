import React, { useState } from 'react';
import { Ticket, CreditCard } from 'lucide-react';

type TicketType = 'regular' | 'vip' | 'vvip';

interface TicketOption {
  type: TicketType;
  name: string;
  price: number;
  features: string[];
}

const ticketOptions: TicketOption[] = [
  {
    type: 'regular',
    name: 'Regular',
    price: 5000,
    features: [
      'General seating',
      'Event program',
      'Access to main ceremony'
    ]
  },
  {
    type: 'vip',
    name: 'VIP',
    price: 15000,
    features: [
      'Premium seating',
      'Event program',
      'Access to main ceremony',
      'Refreshments',
      'Photo opportunities'
    ]
  },
  {
    type: 'vvip',
    name: 'VVIP',
    price: 25000,
    features: [
      'Front row seating',
      'Event program',
      'Access to main ceremony',
      'Premium refreshments',
      'Meet & greet with contestants',
      'Professional photo session',
      'Exclusive gift bag'
    ]
  }
];

const BookTicket = () => {
  const [selectedTicket, setSelectedTicket] = useState<TicketType | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    quantity: 1
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ ticketType: selectedTicket, ...formData });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="book-ticket" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Ticket className="w-16 h-16 text-purple-600 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Book Your Tickets</h2>
          <p className="text-gray-600">Secure your spot at the most anticipated cultural event of 2025</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {ticketOptions.map((ticket) => (
            <div
              key={ticket.type}
              className={`${
                selectedTicket === ticket.type
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200 bg-white'
              } border-2 rounded-xl p-8 cursor-pointer transition-all duration-200 hover:shadow-lg`}
              onClick={() => setSelectedTicket(ticket.type)}
            >
              <h3 className="text-2xl font-bold mb-4">{ticket.name}</h3>
              <p className="text-3xl font-bold text-purple-600 mb-6">
                ₦{ticket.price.toLocaleString()}
              </p>
              <ul className="space-y-3">
                {ticket.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {selectedTicket && (
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Complete Your Booking</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="name">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="email">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="phone">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2" htmlFor="quantity">
                    Number of Tickets
                  </label>
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    min="1"
                    max="10"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white font-bold py-4 px-8 rounded-lg hover:bg-purple-700 transition-colors duration-200 flex items-center justify-center"
                >
                  <CreditCard className="mr-2" />
                  Proceed to Payment
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
};

export default BookTicket;