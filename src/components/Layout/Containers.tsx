import React, { FC } from "react";
import styled from "styled-components";

interface Props {
  gap?: string;
  margin?: string;
}

export const Wrapper: FC<Props> = ({ gap, children }) => {
  return <ParentWrapper gap={gap}>{children}</ParentWrapper>;
};

export const Flex: FC<Props> = ({ gap, children }) => {
  return <FlexWrapper gap={gap}>{children}</FlexWrapper>;
};

export const Main: FC<Props> = ({ gap, children }) => {
  return <MainWrapper gap={gap}>{children}</MainWrapper>;
};

export const Article: FC<Props> = ({ gap, margin, children }) => {
  return (
    <ArticleWrapper gap={gap} margin={margin}>
      {children}
    </ArticleWrapper>
  );
};

const ParentWrapper = styled.div<Props>`
  gap: ${(props) => props.gap && props.gap};
`;

const FlexWrapper = styled.div<Props>`
  display: flex;
  gap: ${(props) => props.gap && props.gap};
  align-items: center;
  justify-content: center;
`;

const MainWrapper = styled.main<Props>`
  gap: ${(props) => props.gap && props.gap};
`;

const ArticleWrapper = styled.article<Props>`
  gap: ${(props) => props.gap && props.gap};
  margin: ${(props) => (props.margin ? props.margin : `2rem 0`)};
`;
