import {browserLocalPersistence, getAuth, setPersistence, signInWithEmailAndPassword } from "firebase/auth";
import { addUser } from "./userSlice";

export const enterUser = (email, password, setErroMessage,dispatch) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredentials) => {
      const user = userCredentials.user;
      setErroMessage(null);

      dispatch(
        addUser({ email: user.email, name: user.displayName, uid: user.uid })
      );
      // setPersistence(auth,browserLocalPersistence).then(()=>{
      //   console.log("Persistence set");
      // })
    })

    .catch((eror) => {
      setErroMessage(eror.code + " - " + eror.message);
    });
};
