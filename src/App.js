import React from "react";

import Routes from "./routers/router";

import CreateGlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Routes />
      <CreateGlobalStyle />
    </>
  );
}

export default App;
