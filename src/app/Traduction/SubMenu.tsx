import {
  AppstoreOutlined,
  PlusSquareOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const SideMenu = () => {
  const { t } = useTranslation();

  return (
    <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
      <Menu.Item key="1" icon={<AppstoreOutlined />}>
        <Link to="/List">{t("menu.items.list")}</Link>
      </Menu.Item>
      <Menu.Item key="2" icon={<PlusSquareOutlined />}>
        <Link to="/New">{t("menu.items.new")}</Link>
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
        <Link to="/Params">{t("menu.items.user")}</Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideMenu;
