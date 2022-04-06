import React, { FC } from "react";
import styled from "styled-components";

export interface Props {
  children: any;
}

export const Div: FC<Props> = ({ children }) => {
  return <DivContainer>{children}</DivContainer>;
};

const DivContainer = styled.div``;
