import React from "react";
import myImage from "../assets/logo.png";
import userIcon from "../assets/smiley.jpeg";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
       signOut(auth)
        .then(() => {
          console.log("User signed out successfully");
          navigate("/");
        })
        .catch((error) => {
          console.error("Error signing out:", error);
          navigate("/error");
        });

  };

  return (
    <>
    <div className="absolute w-screen p-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between ">
        <img className="w-44" src={myImage} alt="Logo_img"></img>
         { user &&  (<div className="flex ">
          <img className="w-14 h-14 rounded-md mt-2 mr-8 " alt="userIcon" src={user?.photoURL}></img>
          <button onClick={handleSignOut} className="bg-red-600 min-w-20 h-14 mt-2  text-white px-4 py-2 rounded-md">Sign Out</button>
        </div>)}
      </div>
    </>
  );
};

export default Header;
