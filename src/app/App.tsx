import { Layout } from "antd";
import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import "../i18n";
import "./App.css";
import List from "./Traduction/List";
import SideMenu from "./Traduction/SubMenu";

const { Sider } = Layout;

function App() {
  const [collapsed, setCollapsed] = useState(true);

  const onCollapse = (collapsed: boolean) => {
    setCollapsed(collapsed);
  };

  return (
    <Layout style={{ height: "100vh" }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <SideMenu />
      </Sider>
      <Layout>
        <Switch>
          <Route path="/Params">Params</Route>
          <Route path="/New">New</Route>
          <Route path="/List">
            <List />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Layout>
    </Layout>
  );
}

export default App;
