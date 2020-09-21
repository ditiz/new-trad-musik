import { GoogleOutlined } from "@ant-design/icons";
import { Button } from "antd";
import firebase from "firebase";
import React from "react";
import { useTranslation } from "react-i18next";

const OtherLogin = () => {
  const { t } = useTranslation();

  const loginWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("profile");
    provider.addScope("email");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        console.log(result);
      });
  };

  const loginAnonymously = () => {
    firebase.auth().signInAnonymously();
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <Button icon={<GoogleOutlined />} onClick={loginWithGoogle}>
        {t("login.login-with-google")}
      </Button>

      <Button onClick={loginAnonymously}>{t("login.login-anonymously")}</Button>
    </div>
  );
};

export default OtherLogin;
