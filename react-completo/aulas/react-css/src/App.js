import { useState } from "react";
import Slide from "./Slide";

function App() {
  const slides = [
    {
    id:"slide1",
    text: 'slide1'
  },
    {
    id:"slide2",
    text: 'slide2'
  },
    {
    id:"slide3",
    text: 'slide3'
  },
]


  return (
    <>
      <Slide slides={slides} />
    </>
  );
}

export default App;
