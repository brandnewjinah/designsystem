import React, { FC } from "react";

//import libraries
import styled from "styled-components";

//import styles and assets
import { colors } from "./StyleVariables";

interface Props {
  title?: string;
  image?: string;
  children?: any;
  divider?: boolean;
}

const Section: FC<Props> = ({ title, image, children, divider }) => {
  return (
    <Wrapper>
      {title && <h3>{title}</h3>}
      {image && (
        <ImageContainer>
          <img src={image} />
        </ImageContainer>
      )}
      <Article>{children}</Article>
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

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${colors.gray_2};
  margin: 4em 0;
`;

export default Section;
