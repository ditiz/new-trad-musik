import { Button, Card, Layout, PageHeader } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";

const { Header, Footer, Content } = Layout;

const List = () => {
  const { t } = useTranslation();

  return (
    <Header>
      <Header>
        <PageHeader title={t("list-trad")} />
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
    </Header>
  );
};

export default List;
