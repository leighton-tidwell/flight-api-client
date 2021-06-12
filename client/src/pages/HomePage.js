import React from "react";
import SearchContainer from "../components/SearchContainer";
import InfoModule from "../components/InfoModule";

function HomePage(props) {
  return (
    <>
      <SearchContainer submit={props.submit}/>
      <InfoModule />
    </>
  );
}

export default HomePage;
