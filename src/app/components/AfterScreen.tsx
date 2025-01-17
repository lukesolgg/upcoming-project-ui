import React from 'react';
import Image from 'next/image';
import pfp from "../assets/pfp.png"

const AfterScreen: React.FC = () => {
  return (
    <div className="text-center space-y-4">
      <p className="text-lg sm:text-xl font-mono mb-4 text-blue-200">The project is not yet ready, please follow LDKCapital on Twitter for further updates.</p>
      <Image src={pfp} alt="LDKCapital Profile Picture" width={100} height={100} className="rounded-full mx-auto sm:w-[150px] sm:h-[150px] mb-4" />
      <a href="https://twitter.com/ldkcapital" target="_blank" rel="noopener noreferrer" className="bg-blue-500 font-mono text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-blue-300 hover:bg-blue-600 inline-block">Follow on Twitter</a>
    </div>
  );
};

export default AfterScreen;