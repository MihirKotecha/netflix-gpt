import {getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "./userSlice";

export const enterUser = (email, password, setErroMessage,dispatch,navigate) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      console.log(user);
      setErroMessage(null);

      dispatch(
        addUser({ email: user.email, name: user.displayName, uid: user.uid })
      );
      navigate("/browse");
    })

    .catch((eror) => {
      console.log(eror.code + " - " + eror.message);
      setErroMessage(eror.code + " - " + eror.message);
    });
};
