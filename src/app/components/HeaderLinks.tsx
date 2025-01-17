import React from 'react';

const HeaderLinks: React.FC = () => (
  <div className="absolute top-4 right-4 flex space-x-2 sm:space-x-4">
    <a href="#" className="text-blue-200 font-mono text-sm sm:text-base">Whitepaper</a>
    <a href="#" className="text-blue-200 font-mono text-sm sm:text-base">Discord</a>
    <a href="#" className="text-blue-200 font-mono text-sm sm:text-base">Twitter</a>
  </div>
);

export default HeaderLinks;