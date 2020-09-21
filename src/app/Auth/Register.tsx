import { Button, Card, Divider, Form, Input, notification } from "antd";
import firebase from "firebase";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import OtherLogin from "./OtherLogin";

const Register = () => {
  const { t } = useTranslation();

  const onFinish = (values: { [x: string]: string }) => {
    const { email, password } = values;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("success", res);
        notification.success({
          message: t("login.register-success"),
        });
      })
      .catch((error) => {
        console.log(error);
        notification.error({
          message: t("login.register-fail"),
          description: `${error.code} ${error.message}`,
        });
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

          {/* <Form.Item
            label={t("login.username")}
            name="username"
            rules={[{ required: true, message: t("login.no-username") }]}
          >
            <Input />
          </Form.Item> */}

          <Form.Item
            label={t("login.password")}
            name="password"
            rules={[{ required: true, message: t("login.no-password") }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item label=" " colon={false}>
            <Button type="primary" htmlType="submit">
              {t("login.submit-create")}
            </Button>
          </Form.Item>
        </Form>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Link to="/Login">{t("login.login")}</Link>
        </div>

        <Divider />

        <OtherLogin />
      </Card>
    </div>
  );
};

export default Register;
