import { useSelector } from "react-redux";
import VideoTitle from "./VedioTitle";
import VideoBackGround from "./VideoBackground";
import Header from "./Header";


const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlaying);
    if(!movies) return;
    const {original_title ,overview,id} = movies[8];
    return(
        <div className="">
             
            <VideoTitle title={original_title} overview={overview} className=""/>
            <VideoBackGround id={id}/>
        </div>
    );
};

export default MainContainer;