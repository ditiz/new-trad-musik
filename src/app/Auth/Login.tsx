import { Button, Card, Divider, Form, Input } from "antd";
import firebase from "firebase";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OtherLogin from "./OtherLogin";

const Login = () => {
  const { t } = useTranslation();

  // const [userData, setUserData] = useState({});

  const onFinish = (values: { [x: string]: any }) => {
    const { email, password } = values;

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("success", res);
      })
      .catch(function (error) {
        // Handle Errors here.
        const { code, message } = error.code;

        console.log("error", code, message);
      });
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "start center",
        margin: "5rem",
      }}
    >
      <Card style={{ width: "35rem" }}>
        <Form
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label={t("login.email")}
            name="email"
            rules={[{ required: true, message: t("login.no-email") }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label={t("login.password")}
            name="password"
            rules={[{ required: true, message: t("login.no-password") }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              {t("login.submit")}
            </Button>

            <span style={{ marginLeft: 10 }}>
              <Link to="/ForgotPassword">{t("login.forgot-password")}</Link>
            </span>
          </Form.Item>
        </Form>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/Register">{t("login.register")}</Link>
        </div>

        <Divider />

        <OtherLogin />
      </Card>
    </div>
  );
};

export default Login;
