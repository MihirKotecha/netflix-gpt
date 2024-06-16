import logoURL from "../assets/Netflix-Logo.wine.svg";
import DropDown from "./DropDown";
import prfilePic from "../assets/Generic-Profile-Image.png";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";
import { SUPPORTED_LANG } from "../utils/constants";
import { changeAppLang } from "../utils/appConfigSlice";
const Header = ({ setGptSearchPage }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [isGptBtnText, setIsGptBtnText] = useState(true);
  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const dipatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email } = user;
        dipatch(addUser({ email: email, id: uid, name: displayName }));
        navigate("/browse");
      } else {
        navigate("/login");
      }
    });
  }, []);

  const handleGptClick = () => {
    setGptSearchPage();
    setIsGptBtnText(!isGptBtnText);
  };

  const handleLanguageChange = (e) => {
    dipatch(changeAppLang(e.target.value));
  }

  return (
    <div className="absolute top-0 w-full z-10 flex justify-between items-center ">
      <img className="w-48 px-7" src={logoURL} alt="logo" />
      <div className="relative flex">
        {!isGptBtnText && (
          <select className="rounded-lg bg-slate-600 text-white my-2 p-2" onChange={handleLanguageChange}>
            English
            {SUPPORTED_LANG.map((lang) => (
              <option value={lang.identifier}>{lang.name}</option>
            ))}
          </select>
        )}
        <button
          className="mx-8 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 my-2 p-2 text-white font-bold rounded-lg"
          onClick={handleGptClick}
        >
          {isGptBtnText ? "GPT Search" : "Home"}
        </button>
        <img
          className="w-10 h-10 mr-8 my-2 cursor-pointer"
          onClick={handleClick}
          src={prfilePic}
          alt="profile"
        />
        {isDropDownOpen && (
          <div className="absolute right-0 m-2 my-14">
            <DropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
