"use client";

import NewTitle from './components/NewTitle';
import Description from './components/Description';
import CallToAction from './components/CallToAction';
import HeaderLinks from './components/HeaderLinks';
import AfterScreen from './components/AfterScreen';
import BackButton from "./components/BackButton"
import { useState } from 'react';

export default function Home() {
  const [isJourneyStarted, setIsJourneyStarted] = useState(false);

  const handleStartJourney = () => {
    setIsJourneyStarted(true);
  };

  const handleBack = () => {
    setIsJourneyStarted(false);
  };

  return (
    <div className="bg-radial-gradient min-h-screen flex items-center justify-center text-center p-4 sm:p-8 relative">
      {isJourneyStarted ? (
        <div className="text-white space-y-4">
          <BackButton onBackClick={handleBack} />
          <NewTitle />
          <AfterScreen />
        </div>
      ) : (
        <div className="text-white space-y-4">
          <NewTitle />
          <Description />
          <CallToAction onStartJourney={handleStartJourney} />
        </div>
      )}
      <HeaderLinks />
    </div>
  );
}