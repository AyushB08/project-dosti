import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark-blue text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex w-full items-center justify-center space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">Projects</a>
          <a href="#" className="hover:text-gray-400">Team</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
          <a href="#" className="hover:text-gray-400">Donate</a>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-white hover:text-gray-400">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>Contact: example@gmail.com</p>
        <p>&copy; {new Date().getFullYear()} Project Dosti. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
