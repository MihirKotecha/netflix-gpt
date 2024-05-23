import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInFomr] = useState(true);

  const handleFormToggle = () => {
    setIsSignInFomr(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div>
        <img
          className=" absolute brightness-50"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/41c789f0-7df5-4219-94c6-c66fe500590a/3149e5eb-4660-4e3d-9e65-b1e615229c64/IN-en-20240513-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-img"
        ></img>
      </div>
      <form className=" bg-black bg-opacity-60 w-3/12 h-3/6 absolute z-10 my-36 p-4 mx-auto right-0 left-0 flex justify-center flex-wrap">
        <h1 className="p-2 my-4 text-3xl text-white font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Email Address"
            className="p-2 my-2 w-3/4 bg-inherit border placeholder-slate-500 border-solid border-slate-500 rounded-lg text-white"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-3/4 bg-inherit border placeholder-slate-500 border-solid border-slate-500 rounded-lg text-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-3/4 bg-inherit placeholder-slate-500 border border-solid border-slate-500 rounded-lg text-white"
        />
        <button className=" bg-red-600 text-white p-2 my-4 w-3/4 rounded-lg">
          Submit
        </button>
        <p className="p-2 my-2 cursor-pointer text-white" onClick={handleFormToggle}>
          {isSignInForm
            ? "First time here? Sign Up"
            : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;