import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const TeamItem = ({ name, role, imageUrl }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 m-4 flex flex-col items-center justify-center text-center">
      <img src={imageUrl} alt={name} className="w-12 h-12 md:w-24 md:h-24 rounded-full mb-4" />
      <h2 className="text-lg font-bold md:mb-2">{name}</h2>
      <p className="text-sm text-gray-600">{role}</p>
      <div className="flex md:mt-4">
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-blue-500 hover:text-blue-700 mx-2">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>
    </div>
  );
};

export default TeamItem;
