import React, { use, useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    console.log("Button clicked");
    // Validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value,
      // name.current.value
    );
    // Handle the form submission logic here
    console.log(message);
    // console.log("Email:", email.current.value);
    setErrorMessage(message);

    if (message) return;

    // sign in / Sign up
    // if (!message) {
    //   // If validation fails, show the error message
    //   return;
    // }

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log("User signed up:", user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
     
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("User signed in:", user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

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
      <form
        // This prevents the default form submission behavior
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-[400px] absolute p-12 bg-black mx-auto my-36 right-0 left-0  flex flex-col items-center justify-center text-white bg-opacity-70 rounded-md"
      >
        <h1 className="relative font-bold text-3xl py-1 -ml-48 mb-8 ">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2  bg-gray-500 rounded-md w-full"
          />
        )}
        <input
          // This ref is used to access the input value later
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2  bg-gray-500 rounded-md w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2  bg-gray-500 rounded-md w-full"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 m-2  bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 -ml-24 cursor-pointer" onClick={toggleSignInForn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
