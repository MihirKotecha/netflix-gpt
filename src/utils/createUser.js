import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addUser } from "./userSlice";

export const createUser = (
  name,
  email,
  password,
  dispatch,
  setErroMessage
) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      updateProfile(user, {
        displayName: name,
      }).then(() => {
        dispatch(
          addUser({ email: user.email, name: user.displayName, uid: user.uid })
        );
      });
    })
    .catch((error) => {
      setErroMessage(error.message + "-" + error.code);
    });
};
