import React from "react";
import Header from "./Header";

const GptSearch = () => {
  return (
    <div className="">
      <div>
        <img
          className=" absolute brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <div className="absolute  w-[99%] h-screen flex items-center justify-center">
        <form className="bg-black grid grid-cols-12 p-1 w-1/2 rounded-lg">
          <input
            type="text"
            placeholder="What do you want to watch today?"
            className="p-2 m-2 col-span-9 rounded-lg text-lg"
          ></input>
          <button className="p-2 m-2 bg-red-700 col-span-3 rounded-lg text-lg">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default GptSearch;
