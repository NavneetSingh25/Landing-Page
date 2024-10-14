// Footer.js
import { Linkedin, Mail, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
        <div className="flex space-x-8">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/theaeroclub/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-blue-400"
          >
            <Linkedin className="w-6 h-6" />
            <span>LinkedIn</span>
          </a>

          {/* Email */}
          <a
            href="aero.society@study.iitm.ac.in"
            className="flex items-center space-x-2 hover:text-red-400"
          >
            <Mail className="w-6 h-6" />
            <span>Email</span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-pink-500"
          >
            <Instagram className="w-6 h-6" />
            <span>Instagram</span>
          </a>
        </div>

        <p className="mt-6 text-sm text-neutral-400">
          © {new Date().getFullYear()} Avasya. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
