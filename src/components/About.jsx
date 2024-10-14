import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-indigo-900 to-black text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-5xl font-bold mb-8 text-gradient">
          About Us
        </h2>

        {/* Description */}
        <p className="text-xl mb-8 leading-relaxed max-w-3xl mx-auto">
          Welcome to <span className="text-cyan-400">Aero Society</span>, a community of space enthusiasts passionate about exploring the wonders of the universe. From stargazing events to expert-led informatory sessions, we aim to inspire the next generation of astronomers, engineers, and dreamers.
        </p>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-12">
          <div className="max-w-md mx-auto md:mx-0 text-left p-6 bg-indigo-800 bg-opacity-80 rounded-lg shadow-lg transform transition hover:scale-105">
            <h3 className="text-3xl font-bold text-cyan-400 mb-4">Our Mission</h3>
            <p>
              To promote interest in space exploration, astronomy, and related sciences through engaging events, interactive quizzes, and informative sessions, while fostering a sense of curiosity and wonder in the community.
            </p>
          </div>

          {/* Events Section */}
          <div className="max-w-md mx-auto md:mx-0 text-left p-6 bg-indigo-800 bg-opacity-80 rounded-lg shadow-lg transform transition hover:scale-105">
            <h3 className="text-3xl font-bold text-purple-400 mb-4">What We Do</h3>
            <p>
              Our society conducts regular events including space quizzes, star-watching nights, and discussions with experts in space research. Whether you’re an amateur astronomer or a seasoned enthusiast, our society offers something for everyone.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <a href="#events" className="inline-block bg-cyan-500 text-black px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:bg-cyan-600 hover:shadow-xl transition">
            Join the Journey
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
