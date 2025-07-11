import React from "react";
import Header from "./Header";
import MainComponent from "./MainComponent";
import SecondaryComponent from "./SecondaryComponent";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
import store from "../utils/store";

const Browse = () => {
  const toggleBtn = useSelector((store) => store.gpt.toggleGptSearchBtn);
  return (
    <div>
      <Header />
      {toggleBtn ? (
        <GptSearch />
      ) : (
        <>
          <MainComponent />
          <SecondaryComponent />
        </>
      )}
    </div>
  );
};

export default Browse;
