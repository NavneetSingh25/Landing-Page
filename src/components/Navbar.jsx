import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom"; // Use Link for routing
import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [MobileDrawerOpen, setMobileDraweropen] = useState(false);
  const ToggleNavbar = () => {
    setMobileDraweropen(!MobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 text-white backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={Logo} alt="logo" />
            <span className="text-xl tracking-tight">AVASYA</span>
          </div>

          <ul className="hidden lg:flex justify-center space-x-10">
            <li>
              <a href="#home" className="hover:text-yellow-400">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400">About</a>
            </li>
            <li>
              <a href="#features" className="hover:text-yellow-400">Features</a>
            </li>
            <li>
              <a href="#quotes" className="hover:text-yellow-400">Quotes</a>
            </li>
          </ul>

          <div className="hidden lg:flex justify-center space-x-12 items-center">
            {/* Use Link to navigate to /quiz and /signin */}
            <Link
              to="/quiz"
              className="px-3 py-2 border font-semibold text-blue-900 bg-gradient-to-r from-purple-100 to-indigo-500 rounded-md"
            >
              Quiz Portal
            </Link>
            <Link
              to="/signin"
              className="bg-gradient-to-r from-orange-500 to-orange-800 px-3 py-2 rounded-md"
            >
              Sign In
            </Link>
          </div>

          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={ToggleNavbar}>
              {MobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {MobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col gap-4 justify-center items-center lg:hidden">
            <ul className="space-y-4 text-center">
              <li className="mb-2">
                <a href="#home" className="hover:text-yellow-400">Home</a>
              </li>
              <li className="mb-2">
                <a href="#about" className="hover:text-yellow-400">About</a>
              </li>
              <li className="mb-2">
                <a href="#features" className="hover:text-yellow-400">Features</a>
              </li>
              <li className="mb-2">
                <a href="#quotes" className="hover:text-yellow-400">Quotes</a>
              </li>
            </ul>

            <div className="flex space-x-4">
              <Link
                to="/quiz"
                className="px-3 py-2 border bg-gradient-to-r from-purple-100 to-indigo-500 rounded-md"
              >
                Quiz Portal
              </Link>
              <Link
                to="/signin"
                className="px-3 py-2 border rounded-md bg-gradient-to-r from-orange-500 to-orange-800"
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
