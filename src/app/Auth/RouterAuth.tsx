import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { Card } from "antd";
import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const RouterAuth = () => {
  return (
    <Switch>
      <Route path="/Register">
        <Register />
      </Route>

      <Route path="/Login">
        <Login />
      </Route>

      <Route path="/">
        <Login />
      </Route>

      <Card>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
      </Card>
    </Switch>
  );
};

export default RouterAuth;
