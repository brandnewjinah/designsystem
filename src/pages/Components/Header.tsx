import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Layout/Section";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const HeaderPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Header</h1>
        <Article>
          <p>
            The global header includes a branding to identify the site and
            horizontal navigation elements to reach the main sections of a
            website
          </p>
        </Article>
        <Main>
          <Section title="Anatomy" />
          <Section title="Anatomy" />
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

export default HeaderPage;
