import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router related components
import FeatureSection from "./components/FeatureSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import './herosection.css';
import galaxyBg from './assets/Galaxy-g.jpg';
import AboutSection from "./components/About";
import SpaceQuotesSection from "./components/SpaceQuotesSection";
import Footer from "./components/Footer";
import Quiz from './components/Quiz'; // Import Quiz component
import SignIn from './components/SignIn'; // Import SignIn component

export default function App() {
  return (
    <Router>
      <div style={{ backgroundImage: `url(${galaxyBg})` }} className="relative">
        <Navbar/>
        <div className="max-w-7Xl mx-auto pt-6 px-6">
          <Routes>
            {/* Define the main page where the sections are rendered */}
            <Route
              path="/"
              element={
                <>
                  <div id="home" className="pt-14"><HeroSection/></div>
                  <div id="about" className="pt-12"><AboutSection/></div>
                  <div id="features" className="pt-10"><FeatureSection/></div>
                  <div id="quotes" className="pt-4"><SpaceQuotesSection/></div>
                  <Footer/>
                </>
              }
            />

            {/* Define routes for Quiz and SignIn components */}
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
