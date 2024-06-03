import { useSelector } from "react-redux";
import MovieList from "./MoviesList";

const SecondaryContainer = ({title}) => {
    const movies = useSelector(store => store.movies)
    return(
        <div>
            <div className="bg-black">
            <div className="relative -mt-56">
                <MovieList title={"Now Playing"} movies={movies.nowPlaying}/>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}/>
                <MovieList title={"Popular"} movies={movies.popularMovies}/>
                <MovieList title={"Upcoming"} movies={movies.upComingMovies}/>
            </div>
            </div>
           
        </div>
    );
};

export default SecondaryContainer;