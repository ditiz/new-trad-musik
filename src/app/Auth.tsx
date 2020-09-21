import { FirebaseAuthProvider } from "@react-firebase/auth";
import firebase from "firebase/app";
import "firebase/auth";
import React from "react";
import { config } from "../firebase";
import HandlerApp from "./HandlerApp";

const Auth = () => {
  return (
    <FirebaseAuthProvider firebase={firebase} {...config}>
      {<HandlerApp />}
    </FirebaseAuthProvider>
  );
};

export default Auth;
