import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Sections/Section";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";
import { Cards } from "../../components/Cards/Cards";

const CardPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Card</h1>
        <Article>
          <p>
            Card is a rectangular container that groups related contents and
            actions about a single subject.
          </p>
        </Article>
        <Main>
          <Section title="Interactive Demo" maxWidth={true}>
            <Cards title="Card Title" subtitle="March 16 2021">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </Cards>
          </Section>
        </Main>
      </Header>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.header`
  margin-bottom: 4em;
`;

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Main = styled.main``;

export default CardPage;
