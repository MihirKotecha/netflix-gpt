import { getAuth,signInWithEmailAndPassword } from "firebase/auth";

export const enterUser = (email,password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth,email,password).then((userCredentials) => {
        const user = userCredentials.user;
        console.log(user);
    }).catch((eror) => {
        console.log(eror.code + " - " + eror.message);
    }) 
};