import { useDispatch } from "react-redux";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";
import API_OPTIONS from "../utils/constants";

const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    const trailerList = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = trailerList ? trailerList[0] : json.results[0];
    dispatch(addMovieTrailer(trailer));
  };

  useEffect(() => {
    getMovieTrailer();
  }, []);
};

export default useGetMovieTrailer;