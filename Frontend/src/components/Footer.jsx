import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center p-4">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold">Sukuyomi</h3>
            <p className="mt-2">Your go-to platform for everything!</p>
          </div>

          {/* Social Icons with Hover Effects */}
          <div className="flex justify-center mt-4 md:mt-0 space-x-6">
            <a
              href="#"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a
              href="#"
              className="text-white hover:scale-110 transition-transform duration-300"
            >
              <i className="fab fa-instagram fa-2x"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2025 Sukuyomi. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
