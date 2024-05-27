import logoURL from "../assets/Netflix-Logo.wine.svg";
import DropDown from "./DropDown";
import prfilePic from "../assets/Generic-Profile-Image.png";
import { useState } from "react";

const Header = () => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  return (
    <div className="absolute w-full z-10 flex justify-between items-center">
      <img className="w-48 px-7" src={logoURL} alt="logo" />
      <div className="relative">
        <img
          className="w-10 h-10 mr-8 my-2 cursor-pointer"
          onClick={handleClick}
          src={prfilePic}
          alt="profile"
        />
        {isDropDownOpen && (
          <div className="absolute right-0 m-2">
            <DropDown />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
