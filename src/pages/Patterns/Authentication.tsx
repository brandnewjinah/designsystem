import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Layout/Section";
import { Header } from "../../components/Layout/Header";
import { Article } from "../../components/Layout/Article";
import Authentication from "../../patterns/Authentication";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const AuthenticationPage = () => {
  return (
    <Wrapper>
      <Header
        title="Authentication"
        subtitle="Allows users to create an acocunt or login to gain access to an app."
      />
      <Main>
        <Section title="Example">
          <Article backgroundColor="#f6f8fa" center>
            <Authentication />
          </Article>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default AuthenticationPage;
