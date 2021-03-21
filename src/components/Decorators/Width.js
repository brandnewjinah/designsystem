import React from "react";
import styled from "styled-components";

export const MaxWidth = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  max-width: 400px;
`;
