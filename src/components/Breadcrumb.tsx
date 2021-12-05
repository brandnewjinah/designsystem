import React, { FC } from "react";
import { Link } from "react-router-dom";
import { neutral } from "./Token";

//import libraries
import styled from "styled-components";

export interface Props {
  label?: string;
  path?: string | undefined;
  current?: boolean;
}

export const Breadcrumb: FC<Props> = ({ children }) => {
  return (
    <Wrapper aria-label="breadcrumbs">
      <ol>{children}</ol>
    </Wrapper>
  );
};

export const BreadcrumbItem: FC<Props> = ({ label, path, current }) => {
  return (
    <ListItem current={current}>
      {current ? (
        <span aria-current="page">{label}</span>
      ) : (
        <Link to={{ pathname: path }}>{label}</Link>
      )}
    </ListItem>
  );
};

const Wrapper = styled.nav`
  ol {
    display: flex;
    flex-wrap: wrap;
  }
`;

const ListItem = styled.li<Props>`
  &:not(:last-child):after {
    content: " / ";
    color: ${neutral[200]};
    margin: 0 0.875rem;
  }

  a {
    text-decoration: ${(props) => (props.current ? "none" : "underline")};
  }
`;
