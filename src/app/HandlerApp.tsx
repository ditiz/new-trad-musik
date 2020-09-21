import React, { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import RouterAuth from "./Auth/RouterAuth";
import RouterApp from "./RouterApp";

const HandlerApp = () => {
  const isLogin = false;

  if (!isLogin) {
    return (
      <Suspense fallback={"Loader"}>
        <Router>
          <RouterAuth />
        </Router>
      </Suspense>
    );
  }

  return (
    <Suspense fallback={"Loader"}>
      <RouterApp />
    </Suspense>
  );
};

export default HandlerApp;
