import React from 'react';
import { Genre } from './Genre';

export const GenreList = ({ genres, isLoading }) => {
  return (
    <div className="ml-2 space-y-2">
      <h2 className="font-semibold">Genre</h2>
      <div className="grid grid-cols-3 gap-2">
        {!isLoading &&
          genres.map((genre) => {
            return <Genre genre={genre} />;
          })}
      </div>
    </div>
  );
};
