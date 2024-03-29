import React, { FC } from "react";
import styled from "styled-components";
import Text from "../Text";

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
      {title && (
        <>
          <Text variant="h2">{title}</Text>
          {subtitle && <Text variant="h3">{subtitle}</Text>}
        </>
      )}
      {text && <Text variant="body_small">{text}</Text>}
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
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: ${(props) =>
    props.divider === false ? null : `1px solid ${neutral[100]}`};
  padding: 2.5rem 0;

  header {
    padding: 0.75rem 0;
  }

  /* h2 {
    font-size: ${fontSize.lg2};
    font-weight: 500;
    color: ${neutral[600]};
  } */

  h3 {
    color: ${neutral[600]};
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }

  p {
    margin-top: 1rem;
  }
`;
