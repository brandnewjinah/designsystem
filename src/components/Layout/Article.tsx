import React, { FC } from "react";
import styled from "styled-components";

//import styles and assets
import { typeScale, neutral, spacing } from "../Token";

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
}) => {
  return (
    <Wrapper>
      {title && <h5>{title}</h5>}
      {text && <p>{text}</p>}
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
      {children && <Div maxWidth={maxWidth}>{children}</Div>}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding-bottom: 1.5rem;

  h5 {
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
  font-size: 1rem;
  margin: 1rem auto;
`;
