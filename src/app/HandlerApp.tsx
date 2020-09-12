import React, { Suspense } from "react";
import RouterApp from "./RouterApp";

const HandlerApp = () => {
  return (
    <Suspense fallback={"Loader"}>
      <RouterApp />
    </Suspense>
  );
};

export default HandlerApp;
