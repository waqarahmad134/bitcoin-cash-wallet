import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div className="text-white bg-black">
        <div className="flex justify-between items-center gap-2 w-4/5 m-auto py-3">
          <div>
            <img className="w-20" src="logo.png" alt="logo" />
          </div>
          <div className="w-80">
            <form className="relative">
              <input
                value=""
                type="text"
                name="search"
                id="search"
                placeholder="Search"
                className="w-full mx-auto h-10 bg-white rounded-full pl-6 outline-none border-none text-black"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-full text-black text-sm bg-white h-6 absolute top-2 right-2 hover:text-[#fe8133] duration-200 px-3"
              >
                <IoIosSearch />
                <span className="hidden md:block">Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
