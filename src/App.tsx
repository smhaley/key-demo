import React from "react";

import ListDemo from "./components/list-demo";
import KeyDemo from "./components/key-demo/key-demo";
// import Intro from "./components/into";
import Text from "./components/Text";
import { introTitle, introContent, keyTitle, keyContent } from "./content";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Text title={introTitle} content={introContent} />
      <Text title={keyTitle} content={keyContent} />
      <KeyDemo />
      <ListDemo />
    </div>
  );
}

export default App;
