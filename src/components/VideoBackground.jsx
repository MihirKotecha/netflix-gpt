import { useSelector } from "react-redux";
import useGetMovieTrailer from "../hooks/useGetMovieTrailer";

const VideoBackGround = ({ id }) => {
  useGetMovieTrailer(id);
  const trailerId = useSelector((store) => store.movies?.movieTrailer);
  return (
    <div className="w-[90%] aspect-video">
      <iframe
        src={"https://www.youtube.com/embed/" + trailerId?.key +"/?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; "
        referrerPolicy="strict-origin-when-cross-origin"
        className="w-screen aspect-video"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
