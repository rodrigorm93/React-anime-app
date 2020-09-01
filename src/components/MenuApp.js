import React from "react";
import { Menu } from "antd";
import { SettingOutlined } from "@ant-design/icons";

import "./MenuApp.css";

const { SubMenu } = Menu;

export const MenuApp = ({ gener, setGeneroSelec, generoSelec }) => {
  const handleClick = (e) => {
    setGeneroSelec({ current: e.key });
  };

  const { current } = generoSelec;

  return (
    <div className="menu-app">
      <Menu
        onClick={handleClick}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
      >
        <SubMenu icon={<SettingOutlined />} title="Anime">
          <Menu.ItemGroup title="Genero">
            {gener.map((genero, index) => (
              <Menu.Item key={index + 1}>{genero}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu icon={<SettingOutlined />} title="Manga">
          <Menu.ItemGroup title="Genero">
            {gener.map((genero) => (
              <Menu.Item key={genero}>{genero}</Menu.Item>
            ))}
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </div>
  );
};
