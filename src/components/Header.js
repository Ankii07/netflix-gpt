import React, {useEffect } from "react";
import myImage from "../assets/logo.png";
import userIcon from "../assets/smiley.jpeg";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/ConfigSlice";

const Header = () => {
   const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch); 

  const handleSignOut = () => {
       signOut(auth)
        .then(() => {
        })
        .catch((error) => {
          console.error("Error signing out:", error);
          navigate("/error");
        });

  };

    useEffect(() => {
     const unscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
         if(user){
          const { uid, email, displayName, photoURL } = user;
          // console.log("User signed in:", user);
          dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
          navigate("/browse")
         }
        // we can't use navigate here, we can use it in children components only..
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/"); 
      }
    });
    
    // Cleanup subscription on unmount
    return () => unscribe();
    
  }, []);

  const handleGptSearch = () => {
    // toggle GPT Search 
    dispatch(toggleGptSearchView());

  }

  const handleLanguageChange = (e) => {
    // console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
  }

  return (
    <>
    <div className="absolute w-screen p-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img className="w-44" src={myImage} alt="Logo_img"></img>
         { user ?  (<div className="flex ">
          <img className="w-14 h-14 rounded-md mt-2 mr-8 " alt="userIcon" src={user?.photoURL}></img>
           {showGptSearch && <select className="bg-red-600 min-w-20 h-14 mt-2 mr-8 font-serif text-white px-4 py-2 rounded-md" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map(lang => <option className="rounded-lg" key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
            
          </select>}
          <button onClick={handleGptSearch} className="bg-red-600 min-w-20 h-14 mt-2 mr-8 font-serif text-white px-4 py-2 rounded-md">{showGptSearch ? "Home Page" : "GPT Search"}</button>
          <button onClick={handleSignOut} className="bg-red-600 font-serif min-w-20 h-14 mt-2  text-white px-4 py-2 rounded-md">Sign Out</button>
        </div>) : (<div className="flex ">
          <img className="w-14 h-14 rounded-md mt-2 mr-8 " alt="userIcon" src={userIcon}></img>
        </div>)}
      </div>
    </>
  );
};

export default Header;
