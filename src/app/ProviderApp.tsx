import React from "react";
import Auth from "./Auth";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducer } from "./reducer/reducer";

const store = createStore(reducer);

const ProviderApp = () => {
  return (
    <Provider store={store}>
      <Auth />
    </Provider>
  );
};

export default ProviderApp;
