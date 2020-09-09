import React from "react";

import "antd/dist/antd.css";

//import { Layout, Menu } from "antd";

import { HeaderS, MenuS, AvatarS, TextS, Logo, Others } from "./styles";

const HeaderAnt = () => {
  return (
    <HeaderS>
      <Logo />
      <Others>
        <MenuS mode="horizontal">
          <MenuS.Item key="1">Contratos</MenuS.Item>
          <MenuS.Item key="2">Solicitações</MenuS.Item>
          <MenuS.Item key="3">Imprimir Folha</MenuS.Item>
          <MenuS.Item key="4">Imprimir</MenuS.Item>
        </MenuS>
        <AvatarS>UL</AvatarS>
        <TextS type="secondary">Ant Design (secondary)</TextS>
      </Others>
    </HeaderS>
  );
};

export default HeaderAnt;
