import React, { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

import { External } from "../assets/Icons";

export interface Props {
  label: string;
  href: string;
  variant?: "primary" | "secondary" | "tertiary" | undefined;
  external?: boolean;
  disabled?: boolean;
}

type LinksProps = {
  variant?: "primary" | "secondary" | "tertiary" | undefined;
  disabled?: boolean;
};

export const Link: FC<Props> = ({
  label,
  href,
  external,
  variant,
  disabled,
}) => {
  return (
    <>
      {external || disabled ? (
        <ExternalLink
          href=""
          target="_blank"
          variant={variant}
          disabled={disabled}
          aira-disabled={disabled}
        >
          {label}
          {external && (
            <External
              width={16}
              height={16}
              color="#000"
              stroke={1}
              aria-hidden="true"
            />
          )}
        </ExternalLink>
      ) : (
        <Links to={href} variant={variant}>
          {label}
        </Links>
      )}
    </>
  );
};

const Links = styled(RouterLink)<LinksProps>`
  text-decoration: ${(props) =>
    props.variant === "tertiary" ? "none" : "underline"};
  color: ${(props) => (props.variant === "secondary" ? "inherit" : "#0645ad")};

  &:visited {
    color: ${(props) =>
      props.variant === "secondary" ? "inherit" : "#0645ad"};
  }

  &:hover {
    text-decoration: ${(props) => props.variant === "tertiary" && "underline"};
  }
`;

const ExternalLink = styled.a<LinksProps>`
  text-decoration: ${(props) =>
    props.variant === "tertiary" ? "none" : "underline"};
  color: ${(props) =>
    props.variant === "secondary"
      ? "inherit"
      : props.disabled
      ? "#909090"
      : "#0645ad"};
  pointer-events: ${(props) => props.disabled && "none"};

  &:visited {
    color: ${(props) =>
      props.variant === "secondary"
        ? "inherit"
        : props.disabled
        ? "#909090"
        : "#0645ad"};
  }

  &:hover {
    text-decoration: ${(props) => props.variant === "tertiary" && "underline"};
  }

  svg {
    vertical-align: middle;
    margin: 0 0.25rem;
  }
`;
