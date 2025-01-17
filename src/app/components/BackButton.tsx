import React from 'react';
import { FaArrowLeft } from 'react-icons/fa'; // Assuming you're using react-icons for the icon

const BackButton: React.FC<{ onBackClick: () => void }> = ({ onBackClick }) => (
  <button onClick={onBackClick} className="absolute top-4 left-4 flex items-center bg-blue-600 font-mono text-white px-6 py-3 rounded-full border-2 border-blue-300 hover:bg-blue-700">
    <FaArrowLeft className="mr-2" />
    Back
  </button>
);

export default BackButton;