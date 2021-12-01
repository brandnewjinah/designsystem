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

export const Section: FC<Props> = ({
  title,
  subtitle,
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
    <Wrapper divider={divider}>
      <header>
        {title && <h2>{title}</h2>}
        {subtitle && <h5>{subtitle}</h5>}
      </header>
      {text && <p className="text">{text}</p>}
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
      <>{children}</>
    </Wrapper>
  );
};

const Wrapper = styled.section<Props>`
  border-bottom: ${(props) =>
    props.divider === false ? null : `1px solid ${neutral[100]}`};
  padding: 1.5rem 0;

  header {
    padding: 1.5rem 0;
  }

  h2 {
    color: ${neutral[600]};
  }

  h5 {
    color: ${neutral[600]};
  }

  .text {
    margin: 1rem 0;
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

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${neutral[200]};
  margin-top: 3rem;
`;
