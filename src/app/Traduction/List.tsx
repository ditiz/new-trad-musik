import { Button, Card, Layout } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const { Header, Footer, Content } = Layout;

const List = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header>
        <h1 style={{ color: "#FFF" }}>{t("list-trad")}</h1>
      </Header>
      <Content>
        <Card
          title="Default size card"
          extra={<Button type="link">More</Button>}
          style={{ margin: 16 }}
        >
          <p>{t("hello")}</p>
        </Card>
      </Content>
      <Footer>Footer</Footer>
    </>
  );
};

export default List;
