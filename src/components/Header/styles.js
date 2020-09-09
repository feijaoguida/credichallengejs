import styled from "styled-components";

import { Layout, Menu, Avatar, Typography } from "antd";

const { Header } = Layout;

const { Text } = Typography;

export const HeaderS = styled(Header)`
  background-color: #01929f;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  /* identical to box height */
  color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Others = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

export const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 24px 16px 0;
  float: left;
`;

export const MenuS = styled(Menu)`
  background-color: #01929f;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  /* identical to box height */
  color: #ffffff;
  align-content: flex-end;
`;

export const AvatarS = styled(Avatar)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;
`;

export const TextS = styled(Text)`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height */

  color: #ffffff;
  margin: 0 32px 0 10px;
`;
