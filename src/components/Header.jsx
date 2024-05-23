import logoURL from "../assets/Netflix-Logo.wine.svg"

const Header = ()  => {
    return(
        <div className="absolute w-full z-10">
            <img className=" w-48 px-7 " src={logoURL} alt="logo"/>
        </div>
    );
}

export default Header;