import React from 'react';
import { Github, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-200 shadow-md py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm md:text-base">
        
        {/* Left - Logo / Title */}
        <div className="text-blue-600 font-bold flex items-center gap-2 animate-pulse">
          🌐 Shivam’s Web Tools
        </div>

        {/* Center - Bottom Text */}
        <div className="text-gray-600 font-medium text-center">
          © {new Date().getFullYear()} Built with ❤️ by Shivam Jha. All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center space-x-4 text-blue-600">
          <a
            href="https://github.com/shivamxeric"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition duration-300 hover:text-gray-700"
          >
            <Github size={20} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transform hover:scale-125 transition duration-300 hover:text-gray-700"
          >
            <Twitter size={20} />
          </a>
          <a
            href="mailto:jhashivam884@gmail.com"
            className="transform hover:scale-125 transition duration-300 hover:text-gray-700"
          >
            <Mail size={20} />
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
