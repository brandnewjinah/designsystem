import React, { FC } from "react";
import styled from "styled-components";

//import styles and assets
import { typeScale, neutral, spacing, fontSize } from "../Token";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  imageText?: string;
  image2Text?: string;
  image2?: string;
  children?: any;
  divider?: boolean;
  text?: React.ReactNode;
  maxWidth?: boolean;
  backgroundColor?: boolean;
  center?: boolean;
}

export const Article: FC<Props> = ({
  title,
  image,
  imageText,
  image2Text,
  image2,
  children,
  divider,
  text,
  maxWidth,
  backgroundColor,
  center,
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor} center={center}>
      {title && <h3>{title}</h3>}
      {text && <>{text}</>}
      {image && (
        <ImageContainer>
          <img src={image} />
          {imageText && <p>{imageText}</p>}
        </ImageContainer>
      )}
      {image2 && (
        <ImageContainer>
          <img src={image2} />
          {image2Text && <p>{image2Text}</p>}
        </ImageContainer>
      )}
      {children && (
        <Div center={center} maxWidth={maxWidth}>
          {children}
        </Div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article<Props>`
  display: ${(props) => props.center && "flex"};
  align-items: ${(props) => props.center && "center"};
  justify-content: ${(props) => props.center && "center"};
  background-color: ${(props) => props.backgroundColor && "#fcfcf9"};
  padding: 0.5rem 0;

  h3 {
    font-size: ${fontSize.lg1};
    font-weight: 500;
    color: ${neutral[600]};
    padding-bottom: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  margin: 2rem 0 2.5rem;

  img {
    width: 100%;
    object-fit: cover;
  }

  p {
    margin-top: 1rem;
  }
`;

const Div = styled.div<Props>`
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? "400px" : null)};
  display: ${(props) => props.center && "flex"};
  align-items: ${(props) => props.center && "center"};
  justify-content: ${(props) => props.center && "center"};
  margin: 1rem auto;
`;
