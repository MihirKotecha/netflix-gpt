import { getAuth, signOut } from "firebase/auth";
import { removeUser } from "./userSlice";

const signOutUser = (dispatch, navigate) => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      dispatch(removeUser());
      navigate("/");
      console.log("HERE");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default signOutUser;
