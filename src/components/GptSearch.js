import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { netflix_bg } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 w-full">
        <img className="w-full h-[100vh]" src={netflix_bg} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
