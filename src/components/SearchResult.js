import React, { use, useEffect, useState } from "react";

const SearchResult = ({ newArray, overviews }) => {
  console.log("newArray", newArray);
   

 const [imageCount, setImageCount] = useState(0);
  const [imgUrls, setImgUrls] = useState([]);

  // Generate image URLs when newArray changes
  useEffect(() => {
    const urls = newArray.map(posterPath => 
      `https://image.tmdb.org/t/p/w200${posterPath}`
    );
    setImgUrls(urls);
    setImageCount(0); // Reset counter when new array comes in
  }, [newArray]);


  return (
    <div className="absolute left-[250px] top-[300px]  bg-black bg-opacity-80 p-4 rounded-lg">
      <h1 className="text-3xl font-bold text-white font-serif">
        Search Rsults
      </h1>
      <div
        className="flex w-[1000px] gap-4 mt-2 overflow-x-scroll  [&::-webkit-scrollbar]:w-1          
    [&::-webkit-scrollbar-track]:bg-black-100  
    [&::-webkit-scrollbar-thumb]:bg-gray-400 
    [&::-webkit-scrollbar-thumb]:rounded-full 
    hover:[&::-webkit-scrollbar-thumb]:bg-gray-600"
      >
        {overviews &&
          overviews.map((overview, index) => (
            <div className=" flex flex-shrink-0 columns-2 justify-between mt-2  w-[500px] h-[300px] bg-black rounded-lg shadow-red-600 shadow-lg">
              <img
                className="rounded-lg"
                src={imgUrls[index]}
                alt="poster"
                key={index}
            
              />
              <textarea
                className="text-white w-[250px] rounded-lg bg-black font-serif p-2
           [&::-webkit-scrollbar]:w-2          
    [&::-webkit-scrollbar-track]:bg-black-100  
    [&::-webkit-scrollbar-thumb]:bg-gray-400 
    [&::-webkit-scrollbar-thumb]:rounded-full 
    hover:[&::-webkit-scrollbar-thumb]:bg-gray-600 "
                value={overview}
                placeholder="Enter your text..."
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchResult;
