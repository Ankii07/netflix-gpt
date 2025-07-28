import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { netflix_bg } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10 min-w-full min-h-full">
        <img className="w-full h-full" src={netflix_bg} alt="background" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
