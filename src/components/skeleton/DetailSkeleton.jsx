import React from 'react';

export const DetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center gap-6 animate-pulse">
      {/* poster */}
      <div className="w-full max-w-[180px] sm:max-w-[220px] md:w-[300px] mx-auto md:mx-0 shrink-0">
        <div className="w-full aspect-[2/3] bg-gray-300 rounded-md"></div>
      </div>
      {/* content */}
      <div className="flex-1 space-y-4">
        {/* title */}
        <div className="h-6 bg-gray-300 rounded-md w-2/3" />
        {/* Genre */}
        <div className="h-4 bg-gray-300 rounded-md w-1/2" />
        {/* button */}
        <div className="h-10 bg-gray-300 rounded-2xl w-40" />

        {/* overview */}
        <div className="space-y-2 pt-2">
          <div className="h-3 bg-gray-300 rounded-md w-full" />
          <div className="h-3 bg-gray-300 rounded-md w-5/6" />
          <div className="h-3 bg-gray-300 rounded-md w-4/6" />
          <div className="h-3 bg-gray-300 rounded-md w-3/6" />
        </div>
      </div>
    </div>
  );
};
