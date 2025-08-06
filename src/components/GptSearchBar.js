import React, { useRef, useState } from "react";
import { API_OPTIONS } from "../utils/constant";
import language from "../utils/languageConstants";
import { useSelector } from "react-redux";
import SearchResult from "./SearchResult";

const GptSearchBar = () => {
  // console.log(language);
  const { lang } = useSelector((store) => store.config);

  const searchText = useRef(null);
  const [moviePosters, setMoviePosters] = useState([]);
  const [movieOverviews, setMovieOverviews] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  // search movies in TMDB
  const searchMovieTMDB = async (movieName, poster_overviews) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
          movieName
        )}`,
        API_OPTIONS
      );
      const json = await response.json();
      // console.log("overview", json);
      poster_overviews.push(json?.results[0]?.overview);
      return json?.results[0]?.poster_path;
    } catch (err) {
      console.error("Error searching TMDB:", err);
      return null;
    }
  };

  

  const handleGptSearchClick = async () => {
    setLoading(true);
    setShowSearch(false);
    // Logic to handle GPT search click
    const query = searchText.current.value;
    // console.log(query);
    // make an API call to OpenAI or any other service with the query and get movie result
    const posters = [];

    const poster_overviews = [];

    const gptQuery =
      "Act as a movie recommendation system. Suggest movies based on the query: " +
      query +
      "only give me names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Solay, DOn, Golmaal,Koi Mil gya. just give movies name only.";

    // ⚠️ INSECURE! Exposes your API key in browser network requests.
    const response = await fetch(
      "https://api.together.xyz/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer tgp_v1_xUA7afKawwJQxrpS4d6TvgbJPi9SUPrNmVZcgqjjo9I", // Visible in DevTools > Network
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
          messages: [{ role: "user", content: gptQuery }],
        }),
      }
    );

    const data = await response.json();

    // console.log(data);

    if (!data.choices) {
      //TODO: Write Error Handling...
    }
    // console.log(data.choices[0].message.content);
    //
    const gptMovies = data.choices[0].message.content.split(",");

    // For Each movie I will search TMDB API and get the movie details
    for (let movie of gptMovies) {
      // here movie.trim() will remove the space before and after the movie name
      movie = movie.trim();
      const posterPath = await searchMovieTMDB(movie, poster_overviews);
      if (posterPath) {
        posters.push(posterPath);
      }
    }
    console.log("poster_overviews", poster_overviews);
    console.log("posters", posters);
    setMoviePosters(posters);
    setMovieOverviews(poster_overviews);
    setLoading(false);
    setShowSearch(true);
  };

  return (
    <>
      <div className="absolute top-[20%] right-[30%] min-w-[600px] ">
        <form
          className=" bg-black flex justify-between items-center p-4 rounded-lg shadow-lg shadow-blue-500/50"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            ref={searchText}
            type="text"
            className="p-4 m-4 rounded-lg w-[60%]"
            placeholder={language[lang].gptSearch}
          />
          <button
            className="bg-red-600 font-serif min-w-[30%] h-14 mt-2  text-white px-4 py-2 rounded-md"
            onClick={handleGptSearchClick}
          >
            {language[lang].search}
          </button>
        </form>
      </div>
      <div className="bg-black">
        {Loading && (
          <div className="flex-center z-10 absolute left-[250px] top-[300px]  bg-black bg-opacity-50 p-4 w-[1050px] h-[400px] rounded-lg shadow-red-600 shadow-lg">
            <div className="three-body absolute top-[40%] left-[45%] ">
              <div className="three-body__dot" />
              <div className="three-body__dot" />
              <div className="three-body__dot" />
            </div>
          </div>
        )}
        {showSearch && <SearchResult newArray={moviePosters} overviews={movieOverviews} />}
      </div>
    </>
  );
};

export default GptSearchBar;
