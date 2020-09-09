import styled from "styled-components";

import { Select, Button } from "antd";

export const SelectS = styled(Select)`
  background: #ffffff;
  border: 1px solid #f0f0f0;
  box-sizing: border-box;
  border-radius: 2px;
  width: 222px;

  Option {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 16px;
    /* identical to box height */

    color: #8f8f8f;
    padding: 5px;
  }
`;

export const ButtonS = styled(Button)`
  background: #dadada;
  border-radius: 2px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 13px;
  line-height: 16px;
  /* identical to box height */

  text-align: center;

  color: #ffffff;
`;

export const FlexFooter = styled.div`
  display: flex;
  flex-direction: "row";
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
`;

export const ContentLayoutS = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 280px;
`;

export const TitleS = styled.h1`
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  margin-right: 220px;

  color: #000000;
`;
