import React from 'react';

export const Navbar = () => {
  return (
    <nav className="flex px-6 py-4 items-center justify-between">
      {/* logo */}
      <h2>iMovie</h2>

      {/* search */}
      <input
        type="text"
        placeholder="Search title here.."
        className="border rounded-full px-4 py-1"
      />
      {/* menu */}
      <div className=" hidden md:flex gap-4">
        <a href="#">Movies</a>
        <a href="#">Genre</a>
        <a href="#">Trending</a>
        <a href="#">Favorit</a>
      </div>
    </nav>
  );
};
