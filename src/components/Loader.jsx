import React from "react";
import Logo from '../assets/bpr-logo.png';

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center">
      <img
        src= {Logo}
        alt="BPR NextGen Logo"
        className="h-32 w-32 animate-pulse"
      />
      <p className="mt-2 text-blue-700 text-lg font-semibold">Loading...</p>
    </div>
  );
};

export default Loader;
