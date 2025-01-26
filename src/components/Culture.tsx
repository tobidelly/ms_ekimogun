import React from 'react';

const Culture = () => {
  return (
    <section className="py-20 bg-purple-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Promoting Culture & Tradition</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Traditional Attire</h3>
            <p className="text-gray-600">
              Showcasing the rich textile heritage and traditional clothing of Ondo Kingdom through 
              pageant performances and cultural displays.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Language Preservation</h3>
            <p className="text-gray-600">
              Promoting the use and preservation of Ondo dialect through cultural performances 
              and community engagement programs.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Cultural Heritage</h3>
            <p className="text-gray-600">
              Educating younger generations about Ondo's rich history, traditions, and cultural 
              practices through various initiatives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Culture;