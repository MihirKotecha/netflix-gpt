import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import { useState } from "react";
import GptSearch from "./GptSearch";

const Browse = () => {
  const [GPTSearchPage, setGptSearchPage] = useState(false);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const callSetGptSearchPage = () => {
    setGptSearchPage(!GPTSearchPage);
  };

  return (
    <div className=" overflow-x-hidden">
      <Header setGptSearchPage={callSetGptSearchPage} />
      {GPTSearchPage ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
