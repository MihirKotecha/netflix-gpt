import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import API_OPTIONS  from "../utils/constants";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
  const dipatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();
    dipatch(addNowPlayingMovies(json.results));
  };

  useEffect(()=>{
    nowPlayingMovies();
  },[]);
};

export default useNowPlayingMovies;
