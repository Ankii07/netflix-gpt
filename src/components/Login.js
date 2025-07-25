import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { avatar_URL, netflix_bg } from "../utils/constant";

const Login = () => {
  const navigate = useNavigate();
 const dispatch = useDispatch();

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // Validate the form data
    const message = checkValidData(
      email.current.value,
      password.current.value
      // !isSignInForm ? name.current?.value : ""
    );

    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("User signed up:", user);
          updateProfile(user, {
            displayName: name.current?.value,
            photoURL: avatar_URL,
          })
            .then(() => {
              // Profile updated!
               
              const {uid, email, displayName, photoURL} = auth.currentUser;
               dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
            
            })
            .catch((error) => {
              // An error occurred
               setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          // console.log("User signed in:", user);
          // if user sign in navigate it to browse page..
          // navigate("/browse");
        })
        .catch((error) => {
          setErrorMessage(error.code + " " + error.message);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className="w-full h-full"
          src= {netflix_bg}
          alt="background"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 h-[400px] absolute p-12 bg-black mx-auto my-36 right-0 left-0 flex flex-col items-center justify-center text-white bg-opacity-70 rounded-md"
      >
        <h1 className="relative font-bold text-3xl py-1 -ml-48 mb-8">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 m-2 bg-gray-500 rounded-md w-full"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 m-2 bg-gray-500 rounded-md w-full"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 m-2 bg-gray-500 rounded-md w-full"
        />
        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>
        <button
          className="p-2 m-2 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 -ml-24 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
