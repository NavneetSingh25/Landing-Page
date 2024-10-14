import { Rocket, Star, Telescope, Globe, Puzzle, Users } from 'lucide-react';

function FeatureSection() {
  return (
    <div className="relative border-b border-neutral-800 mt-8 min-h-[800px] bg-gradient-to-b from-black via-purple-900 to-indigo-900">
      <div className="text-center">
        <span className="bg-gradient-to-r from-purple-100 to-indigo-500 text-sm rounded-full text-orange-900 h-12 font-extrabold px-2 py-1 uppercase">
          Features
        </span>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl mt-4 text-white text-center tracking-wide">
          Explore the Wonders of Space with Us
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-4">
        
        <div className="text-center text-white">
          <Rocket className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Interactive Space Quizzes</h3>
          <p className="text-neutral-400 mt-4">
            Test your knowledge about space through fun and challenging quizzes
            designed for students of all levels. Explore fascinating topics and
            compete with peers to win exciting prizes.
          </p>
        </div>

        <div className="text-center text-white">
          <Telescope className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Expert Talks & Webinars</h3>
          <p className="text-neutral-400 mt-4">
            Learn from renowned space scientists and industry experts. Attend
            webinars and sessions that give you insights into the latest space
            research, innovations, and discoveries.
          </p>
        </div>

        <div className="text-center text-white">
          <Globe className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Hands-on Workshops</h3>
          <p className="text-neutral-400 mt-4">
            Participate in interactive workshops where you can work on exciting
            space-related projects, from building model rockets to exploring
            astronomy and astrophysics concepts.
          </p>
        </div>

        <div className="text-center text-white">
          <Star className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Astronomy Events & Stargazing</h3>
          <p className="text-neutral-400 mt-4">
            Join our regular stargazing events and astronomy sessions where you
            can observe celestial bodies and explore the night sky with expert
            guidance.
          </p>
        </div>

        <div className="text-center text-white">
          <Puzzle className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Space-Themed Competitions</h3>
          <p className="text-neutral-400 mt-4">
            Compete in various space-themed competitions, including design
            challenges, hackathons, and space exploration strategy games.
          </p>
        </div>

        <div className="text-center text-white">
          <Users className="mx-auto text-orange-400" size={40} />
          <h3 className="text-2xl font-semibold text-purple-300 mt-4">Collaborate with Space Enthusiasts</h3>
          <p className="text-neutral-400 mt-4">
            Connect with like-minded space enthusiasts, share ideas, and work
            together on projects. Our society fosters collaboration and creativity
            among students passionate about space exploration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
