import React from 'react';
import { FaFileAlt, FaDiscord, FaTwitter } from 'react-icons/fa';

const HeaderLinks: React.FC = () => (
  <div className="absolute top-4 right-4 flex space-x-2 sm:space-x-4">
    <a href="#" className="flex items-center text-blue-200">
      <FaFileAlt className="text-base sm:text-xl sm:mr-2" />
      <span className="hidden sm:inline font-mono">Whitepaper</span>
    </a>
    <a href="#" className="flex items-center text-blue-200">
      <FaDiscord className="text-base sm:text-xl sm:mr-2" />
      <span className="hidden sm:inline font-mono">Discord</span>
    </a>
    <a href="#" className="flex items-center text-blue-200">
      <FaTwitter className="text-base sm:text-xl sm:mr-2" />
      <span className="hidden sm:inline font-mono">Twitter</span>
    </a>
  </div>
);

export default HeaderLinks;