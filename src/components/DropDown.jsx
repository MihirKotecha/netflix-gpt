import signOutUser from "../utils/signOutUser";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const DropDown = () => {
    const dipatch = useDispatch();
    const navigate = useNavigate();

    const handleClick = () => {
        signOutUser(dipatch,navigate);
    }
    return(
        <div className=" bg-black w-28 p-2">
            <div className="text-white w-full pb-2 cursor-pointer">
                Account Info
            </div>
            <div className="text-white w-full border-t-2 border-white pt-2 cursor-pointer" onClick={handleClick}>
                Sign Out
            </div>
        </div>
    );
}

export default DropDown;