import React from 'react';

const PastQueens = () => {
  const queens = [
    {
      name: "Queen Sarah Adejuyigbe",
      year: "2023",
      image: "https://images.unsplash.com/photo-1618998584360-10a0c28eec0f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QWZyaWNhbiUyMFF1ZWVufGVufDB8fDB8fHww"
    },
    {
      name: "Queen Elizabeth Akintade",
      year: "2022",
      image: "https://plus.unsplash.com/premium_photo-1666789257987-324048d00dfb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QWZyaWNhbiUyMFF1ZWVufGVufDB8fDB8fHww"
    },
    {
      name: "Queen Victoria Oluwadare",
      year: "2021",
      image: "https://images.unsplash.com/photo-1593351799227-75df2026356b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWZyaWNhbiUyMFF1ZWVufGVufDB8fDB8fHww"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Past Queens</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {queens.map((queen, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-200">
              <img
                src={queen.image}
                alt={queen.name}
                className="w-full h-80 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{queen.name}</h3>
                <p className="text-purple-600 font-medium">Miss Ekimogun {queen.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PastQueens;