import React from "react";

import { icon } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={icon} alt="sumz_logo" className="w-6" />{" "}
          <span className="ml-2 font-extrabold text-xl text-black">
            Adja Sumz's
          </span>
        </div>

        <button
          type="button"
          // onClick={() =>
          //   window.open("https://github.com/TidbitsJS/Summize", "_blank")
          // }
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Simplify your reading with Summize, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries
      </h2>
    </header>
  );
};

export default Hero;
