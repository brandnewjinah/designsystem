import React, { FC } from "react";

//import libraries
import styled from "styled-components";

//import styles and assets
import { neutral } from "./Token";

interface Props {
  title?: string;
  subtitle?: string;
  image?: string;
  children?: any;
  divider?: boolean;
  text?: string;
  maxWidth?: boolean;
}

const Section: FC<Props> = ({
  title,
  subtitle,
  image,
  children,
  divider,
  text,
  maxWidth,
}) => {
  return (
    <Wrapper>
      {title && <h3>{title}</h3>}
      {subtitle && <h5>{subtitle}</h5>}
      {text && <p>{text}</p>}
      {image && (
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      )}
      <Article maxWidth={maxWidth}>{children}</Article>
      {divider === false ? null : <Divider />}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  h3 {
    margin-bottom: 1em;
  }
  margin: 2em 0 3em;
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Article = styled.article<Props>`
width: 100%;
max-width: ${(props) => (props.maxWidth ? "400px" : null)}};
    
  font-size: 1rem;
  margin: 1em auto;

`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${neutral.n200};
  margin: 4em 0;
`;

export default Section;
