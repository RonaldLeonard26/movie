import React from 'react';

export const Navbar = () => {
  return (
    <nav className=" flex px-6 py-4 items-center justify-between shadow-sm">
      {/* logo */}
      <h2 className="text-2xl font-bold">iMovie</h2>

      {/* search */}
      <input
        type="text"
        placeholder="Search title here.."
        className="border border-gray-400 rounded-xl px-6 py-1"
      />
      {/* menu */}
      <div className=" hidden md:flex  gap-4 font-semibold">
        <a href="#">Movies</a>
        <a href="#">Genre</a>
        <a href="#">Trending</a>
        <a href="#">Favorit</a>
      </div>
    </nav>
  );
};
