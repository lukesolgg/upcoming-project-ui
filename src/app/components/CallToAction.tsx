"use client";

import React from 'react';
import AfterScreen from './AfterScreen';
import NewTitle from './NewTitle';

const CallToAction: React.FC<{ onStartJourney: () => void }> = ({ onStartJourney }) => {
  const handleStartJourney = () => {
    onStartJourney();
  };

  return (
    <>
      <p className="text-lg sm:text-2xl font-mono font-bold mb-4 sm:mb-6 text-blue-200">Are you prepared to become one with the mystery of Anon?</p>
      <button onClick={handleStartJourney} className="bg-blue-500 font-mono text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full border-2 border-blue-300 hover:bg-blue-600">Start Your Journey</button>
    </>
  );
};

export default CallToAction;