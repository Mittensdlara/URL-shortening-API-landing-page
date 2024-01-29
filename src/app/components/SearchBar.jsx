"use client";

import Image from "next/image";
import searchBg from "../images/bg-boost-desktop.svg";
import { useState } from "react";
import { shortenUrl } from '../utils/api';

const SearchBar = () => {




  const [shortenedUrl, setShortenedUrl] = useState("");

  const [originalUrl, setOriginalUrl] = useState("");

//   const handleShorten = async () => {
//     try {
//       const shortened = await shortenUrl(originalUrl);
//       setShortenedUrl(() => shortened);
//     } catch (error) {
//       console.error('Error shortening URL:', error.message);
//     }
//   };

  return (
    <div className="mb-5 items-center flex justify-center">
      {/* <Image
      src={searchBg}/> */}
      <div className="serach-bar flex-row justify-center items-center">
        <input
          type="text"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Shorten a link here!"
          className="input input-bordered input-primary lg:pr-20"
        />
        <button className="btn  btn-primary m-3 " 
        // onClick={handleShorten}
        >
          Shorten it
        </button>
      </div>
      {shortenedUrl && (
        <div className="mt-4">
          <p className="text-gray-600">Shortened URL:</p>
          <a
            href={shortenedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
