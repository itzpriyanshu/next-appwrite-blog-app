import React from 'react';

const LoadingScreen = () => {
  return (
    <>
    <div className="h-screen">
      <div className="animate-pulse w-full h-16 bg-gray-200 flex mb-4"></div>
      <div className="bg-gray-200 mx-auto my-8 rounded w-80 h-16 width"></div>
      <div className="flex flex-row items-center">
          <div className="bg-gray-200 mx-auto my-8 rounded w-80 h-80"></div>
          <div className="bg-gray-200 mx-auto my-8 rounded w-80 h-80"></div>
          <div className="bg-gray-200 mx-auto my-8 rounded w-80 h-80"></div>
      </div>
    </div>
    </>
  );
};

export default LoadingScreen;
