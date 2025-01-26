import React from 'react';
import { Crown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage:
            'url("https://media.istockphoto.com/id/535190283/photo/nefertiti.jpg?s=1024x1024&w=is&k=20&c=IqO9PhMT18YPZEjJei0D1TRuq-Ez4X8SdAdUZ0ov9Mc=")',
        }}
      >
        <span className="w-full h-full absolute opacity-50 bg-black"></span>
      </div>
      
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div>
              <h1 className="text-white font-bold text-5xl mb-6">
                Miss Ekimogun
                <Crown className="inline-block ml-2 mb-2" size={40} />
              </h1>
              <p className="text-white text-lg mb-8">
                Celebrating the Beauty, Culture, and Heritage of Ondo Kingdom
              </p>
              <a
                href="#register"
                className="bg-purple-600 text-white font-bold px-6 py-4 rounded-full hover:bg-purple-700 transition-colors duration-200 inline-block"
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;