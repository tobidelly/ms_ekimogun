import React from 'react';
import { Leaf } from 'lucide-react';

const Impact = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <img
              src="https://global.ariseplay.com/amg/www.thisdaylive.com/uploads/7a4c5044-screen-shot-2022-04-29-at-2.21.44-am.png"
              alt="Environmental Impact"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="md:pl-10">
              <div className="text-purple-600 mb-4">
                <Leaf size={40} />
              </div>
              <h2 className="text-4xl font-bold mb-6">Environmental Impact</h2>
              <p className="text-gray-600 text-lg mb-6">
                Miss Ekimogun goes beyond beauty to make a real difference in our community. 
                Our queens lead environmental initiatives, organize clean-up drives, and promote 
                sustainable practices throughout Ondo Kingdom.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Tree planting campaigns
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Community clean-up drives
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-purple-600 rounded-full mr-3"></span>
                  Environmental education programs
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;