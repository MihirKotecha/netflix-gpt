import { useEffect } from "react";
import Browse from "./Browse";
import Login from "./Login";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Body = () => {
    const dipatch = useDispatch();
    const navigate = useNavigate();



    return(
        <div>
            <Login />
            <Browse />
        </div>
    );
}

export default Body;