import React from 'react';
import Image from 'next/image';
import pfp from "../assets/pfp.png"

const AfterScreen: React.FC = () => {
  return (
    <div className="text-center">
      <p className="text-xl font-mono mb-4 text-blue-200">The project is not yet ready, please follow LDKCapital on Twitter for further updates.</p>
      <Image src={pfp} alt="LDKCapital Profile Picture" width={150} height={150} className="rounded-full mx-auto mb-4" />
      <a href="https://twitter.com/ldkcapital" target="_blank" rel="noopener noreferrer" className="bg-blue-500 font-mono text-white px-6 py-3 rounded-full border-2 border-blue-300 hover:bg-blue-600 inline-block">Follow on Twitter</a>
    </div>
  );
};

export default AfterScreen;