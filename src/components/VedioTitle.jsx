import { useState } from "react";

const VideoTitle = ({ title, overview }) => {
  const [moreInfo, setMoreInfo] = useState(true);
  const handleClick = () => {
    setMoreInfo(!moreInfo);
  };
  return (
    <div className=" py-[20%] px-4 w-screen aspect-video absolute bg-gradient-to-r from-black ">
      <h1 className="px-2 font-bold text-3xl text-white">{title}</h1>
      {moreInfo && <p className="px-2 w-2/5 text-lg py-4 text-white">{overview}</p>}
      <div className="my-4">
        <button className="w-48 p-2 text-xl bg-white rounded-md text-center text-black">
          Play
        </button>
        <button
          className="w-48 p-2 text-xl bg-slate-600  rounded-md text-center mx-4 text-black"
          onClick={handleClick}
        >
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
