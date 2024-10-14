import VideoTransition from "./VideoTransition";

function HeroSection(){
    return(
        <div className=" flex h-[500px] flex-col items-center mt-1 lg:mt-2">
      <h1 className="text-5xl font-bold font-orbitron text-transparent  bg-clip-text bg-gradient-to-r from-orange-500 to-red-700 text-center drop-shadow-lg">
  AVASYA
</h1>
<span className="text-5xl mb-1 font-bold text-transparent font-orbitron bg-clip-text bg-gradient-to-r from-orange-100 to-red-500 text-center drop-shadow-lg">The Aero Society</span>
<p className="text-xl mb-1 py-2 font-medium font-sans bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-center mt-3">
  "Unleash your creativity and explore the cosmos of possibilities with our cutting-edge development tools."
</p>
      <VideoTransition/>
      </div>
        
    );
}

export default HeroSection;