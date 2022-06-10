import React, { FC } from "react";
import styled from "styled-components";
import { fontSize, lineHeight, primaryFont } from "./Token";

interface Props {
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "body_big"
    | "body_small"
    | "body_xsmall"
    | "caption"
    | undefined;
  bold?: boolean;
  padding?: string;
  uppercase?: boolean;
  spacing?: string;
  color?: string;
  className?: string;
  children?: any;
}

const Text: FC<Props> = ({
  className,
  variant,
  bold,
  padding,
  uppercase,
  spacing,
  color,
  children,
}) => {
  return (
    <>
      {variant === "h1" ? (
        <Heading1 padding={padding}>{children}</Heading1>
      ) : variant === "h2" ? (
        <Heading2 padding={padding}>{children}</Heading2>
      ) : variant === "h3" ? (
        <Heading3 padding={padding}>{children}</Heading3>
      ) : variant === "h4" ? (
        <Heading4 padding={padding}>{children}</Heading4>
      ) : variant === "h5" ? (
        <Heading5 padding={padding}>{children}</Heading5>
      ) : variant === "h6" ? (
        <Heading6 padding={padding}>{children}</Heading6>
      ) : variant === "body_big" ? (
        <BigParagraph padding={padding}>{children}</BigParagraph>
      ) : variant === "body_small" ? (
        <SmallParagraph
          className={className}
          bold={bold}
          uppercase={uppercase}
          padding={padding}
        >
          {children}
        </SmallParagraph>
      ) : variant === "body_xsmall" ? (
        <XSmallParagraph
          className={className}
          bold={bold}
          uppercase={uppercase}
          padding={padding}
        >
          {children}
        </XSmallParagraph>
      ) : variant === "caption" ? (
        <Caption
          className={className}
          bold={bold}
          uppercase={uppercase}
          color={color}
          spacing={spacing}
          padding={padding}
        >
          {children}
        </Caption>
      ) : (
        <Paragraph
          bold={bold}
          color={color}
          uppercase={uppercase}
          padding={padding}
        >
          {children}
        </Paragraph>
      )}
    </>
  );
};

const Heading1 = styled.h1<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.lg4};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const Heading2 = styled.h2<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.lg3};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const Heading3 = styled.h3<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.lg2};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const Heading4 = styled.h4<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.lg1};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const Heading5 = styled.h5<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.base};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const Heading6 = styled.h6<Props>`
  font-family: ${primaryFont};
  font-size: ${fontSize.sm2};
  font-weight: 700;
  padding: ${(props) => props.padding};
`;

const BigParagraph = styled.p<Props>`
  font-size: ${fontSize.lg1};
  line-height: ${lineHeight.base};
  padding: ${(props) => props.padding};
`;

const Paragraph = styled.p<Props>`
  font-size: ${fontSize.base};
  line-height: ${lineHeight.base};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  color: ${(props) => (props.color ? props.color : "#000")};
  text-transform: ${(props) => props.uppercase && "uppercase"};
  padding: ${(props) => props.padding};
`;

const SmallParagraph = styled.p<Props>`
  font-size: ${fontSize.sm1};
  line-height: ${lineHeight.sm1};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  text-transform: ${(props) => props.uppercase && "uppercase"};
  padding: ${(props) => props.padding};
`;

const XSmallParagraph = styled.p<Props>`
  font-size: ${fontSize.sm2};
  line-height: ${lineHeight.base};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  text-transform: ${(props) => props.uppercase && "uppercase"};
  padding: ${(props) => props.padding};
`;

const Caption = styled.p<Props>`
  font-size: ${fontSize.sm3};
  line-height: ${lineHeight.sm2};
  font-weight: ${(props) => (props.bold ? 600 : 400)};
  color: ${(props) => props.color};
  text-transform: ${(props) => props.uppercase && "uppercase"};
  letter-spacing: ${(props) => props.spacing && props.spacing};
  padding: ${(props) => props.padding};
`;

export default Text;
