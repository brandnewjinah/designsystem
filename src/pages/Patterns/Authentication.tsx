import React, { useState } from "react";
import styled from "styled-components";

//components
import { Section } from "../../components/Layout/Section";
import { Header } from "../../components/Layout/Header";
import { Article } from "../../components/Layout/Article";
import Authentication from "../../patterns/Authentication";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/auth";

const AuthenticationPage = () => {
  return (
    <Wrapper>
      <Header
        title="Authentication"
        subtitle="Allows users to create an acocunt or login to gain access to an app."
      />
      <Main>
        <Section title="Example">
          <Article backgroundColor="#f6f8fa" childCenter>
            <Authentication />
          </Article>
        </Section>
        <Section title="Validation">
          <Article
            title="Client Side"
            text={
              <ul>
                <li>Empty fields</li>
                <li>Invalid email format</li>
                <li>Confirm password value that doens't match password</li>
              </ul>
            }
            divider={false}
          />
          <Article
            title="Server Side"
            text={
              <ul>
                <li>Invalid email and password combination</li>
                <li>Existing email for signup</li>
              </ul>
            }
            divider={false}
          />
        </Section>
        <Section title="Code for React" divider={false}>
          <SyntaxHighlighter language="javascript" style={atomOneLight}>
            {Code.auth}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default AuthenticationPage;
