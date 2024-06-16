import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "./userSlice";
import { removeNowPlayingMovies } from "./moviesSlice";

const signOutUser = (dispatch) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      dispatch(removeUser());
      dispatch(removeNowPlayingMovies());
    })
    .catch((error) => {
    });
};

export default signOutUser;
