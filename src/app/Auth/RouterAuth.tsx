import { FirebaseAuthConsumer } from "@react-firebase/auth";
import { Card, Divider } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const RouterAuth = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <Card>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <>
                <pre>
                  {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
                </pre>
                <Divider />
                <pre>{JSON.stringify(state)}</pre>
              </>
            );
          }}
        </FirebaseAuthConsumer>
      </Card>
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
      </Switch>
    </>
  );
};

export default RouterAuth;
