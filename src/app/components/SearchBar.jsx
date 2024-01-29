"use client";

import Image from "next/image";
import searchBg from "../images/bg-boost-desktop.svg";
import { useState } from "react";

const SearchBar = () => {
  const [shortenLink, setShortenLink] = useState(false);
  const [showShortedLink, setShortedLink] = useState("");
  const [longLink, setLongLink] = useState("");
  const [isCopied, setIsCopied] = useState(false)



  const ShortenLink = async () => {
    setShortenLink(longLink ? true : false);
    const res = await fetch(
      `https://tinyurl.com/api-create.php?url=${longLink}`
    );
    const data = await res.text();
    console.log(data);
    setShortedLink(data);
  };


  const copied = () => {
    setIsCopied(true)
    navigator.clipboard.writeText(showShortedLink);
  }
  return (
    <>
      <div className="mb-5 items-center text-center bg-DarkViolet w-full max-h-full rounded-lg">
        {/* <Image
      src={searchBg}/> */}
        <div className="serach-bargrid gap-4 rounded-xl p-6 relative sm:grid-cols-1 sm:p-6">
          <input
            type="text"
            value={longLink}
            onChange={(e) => setLongLink(e.target.value)}
            placeholder="Shorten a link here!"
            className="input input-bordered input-primary w-full h-16 grid p-5"
          />
          <button
            className="btn  btn-primary m-3 "
            onClick={() => ShortenLink(longLink)}
          >
            Shorten it
          </button>
        </div>
      </div>
      {shortenLink && (
        <div className="mt-4 mb-5 p-5 w-full bg-White rounded-lg shadow-lg">
          <div className="shorten-section flex gap-4 text-center  flex-col justify-center lg:flex-row lg:justify-between">
            <p className="font-bold text-xl">{longLink}</p>
            <a href="#" className="font-bold  text-xl text-Cyan">
              {showShortedLink}
            </a>
            <button
            onClick={() => copied()}

            className="btn btn-accent text-xl ">{isCopied ? "Copied!" : "Copy"}</button>
          </div>
        </div>
      )}
    </>
  );
};

export default SearchBar;
