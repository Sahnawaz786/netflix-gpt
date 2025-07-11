import React, { useRef } from "react";
import openAPI from "../utils/openapi";

const GptSearchBar = () => {

    const searchText = useRef(null)

  const handleSearchBtn = async () => {
    const response = await openAPI.responses.create({
      model: "gpt-4o",
      instructions: "You are a coding assistant that talks like a pirate",
      input: "Are semicolons optional in JavaScript?",
    });

    console.log(response.output_text);
  };

  return (
    <div className="pt-[10%] m-auto mt-0">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className="border w-1/3"
          placeholder="What you want to watch today?"
        />
        <button onClick={handleSearchBtn} className="bg-red-700 text-white">Search</button>
      </form>
    </div>
  );
};

export default GptSearchBar;
