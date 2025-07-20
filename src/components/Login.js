import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignInForn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a927b1ee-784d-494a-aa80-cf7a062d2523/web/IN-en-20250714-TRIFECTA-perspective_5acb7337-c372-45ec-ae12-ddb110e6ad78_large.jpg"
        ></img>
      </div>
      <form className="w-3/12 h-[400px] absolute p-12 bg-black mx-auto my-36 right-0 left-0  flex flex-col items-center justify-center text-white bg-opacity-70 rounded-md">
        <h1 className="relative font-bold text-3xl py-1 -ml-48 mb-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1> 
         { !isSignInForm && (
          <input
            type="text"     
            placeholder="Full Name"
            className="p-2 m-2  bg-gray-500 rounded-md w-full"
          />
        )
       }
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 m-2  bg-gray-500 rounded-md w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 m-2  bg-gray-500 rounded-md w-full"
        />
      
        <button className="p-2 m-2  bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 -ml-24 cursor-pointer" onClick={toggleSignInForn}>
          {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  )
}

export default Login;
