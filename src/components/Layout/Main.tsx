import React from "react";
import styled from "styled-components";

import { Device } from "../../constants/Device";

export const Main: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;

  padding-top: 100px;

  @media (max-width: ${Device.Tablet}) {
    padding-top: 80px;
  }

  @media (max-width: ${Device.Mobile}) {
    padding-top: 50px;
  }
`;
