import React from "react";

import ListDemo from "./components/list-demo";
import KeyDemo from "./components/key-demo/key-demo";
import GithubIcon from "./assets/github";
import Text from "./components/text";
import { introTitle, introContent, keyTitle, keyContent } from "./content";
import "./App.css";

function App() {
  return (
    <div className="app">
      <a href="https://github.com/smhaley/key-demo">
        <GithubIcon className="icon" />
      </a>
      <div className="container">
        <Text title={introTitle} content={introContent} />
        <Text title={keyTitle} content={keyContent} />
      </div>
      <div className="container">
        <KeyDemo />
        <ListDemo />
      </div>
    </div>
  );
}

export default App;
