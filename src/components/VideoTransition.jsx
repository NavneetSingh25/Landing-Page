import { useEffect, useState } from "react";
import video from "../assets/video.mp4";
import video1 from "../assets/video1.mp4";
import '../herosection.css';


function VideoTransition() {
  const [isVideo1Visible, setIsVideo1Visible] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);

      setTimeout(() => {
        setIsVideo1Visible((prev) => !prev); // Swap video visibility after the transition begins
        setIsTransitioning(false); // Reset transitioning state after completion
      }, 2000); // Adjust this delay for a smoother transition (2 seconds here)
    }, 12000); // Run every 12 seconds for a smooth experience (5 seconds of video, 2 seconds of transition)

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="relative mt-1 mb-2 w-full h-[280px]">
        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
        {/* Flexbox for alternating positions */}
      {/* Video 1 */}
      <video
        autoPlay
        loop
        muted
        className={`rounded-lg w-[750px] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 transition-all duration-[2000ms] ease-in-out absolute 
          ${isVideo1Visible && !isTransitioning ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 -translate-x-full z-0'}
        `}
        
      >
        <source src={video} type="video/mp4" />
      </video>
      
      {/* Video 2 */}
      <video
        autoPlay
        loop
        muted
        className={`rounded-lg w-[750px] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4 transition-all duration-[2000ms] ease-in-out absolute 
          ${!isVideo1Visible && !isTransitioning ? 'opacity-100 translate-x-0 z-10' : 'opacity-0 translate-x-full z-0'}
        `}

      >
        <source src={video1} type="video/mp4" />
      </video>
    </div>
    </div>
  );
}

export default VideoTransition;
