import React from 'react';

export const Genre = ({ genre }) => {
  return (
    <div className="rounded-lg shadow-sm items-center justify-center ">
      <p className="font-stretch-50% text-center">{genre.name}</p>
    </div>
  );
};
