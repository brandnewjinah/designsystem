import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";

//assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/select";

const HeaderPage = () => {
  return (
    <Wrapper>
      <Header
        title="Accessibility"
        subtitle="Accessible design lets people of all abilities perceive, understand,
    navigate and interact with the web."
      />
      <Main>
        <Section title="Who benefits from accessibility?">
          <Article
            title="People with disabilities"
            text={
              <ul>
                <li>
                  People with hearing, cognitive, neurological, physical, speech
                  and visual disabilities.
                </li>
              </ul>
            }
            divider={false}
          />
          <Article
            title="People without disabilities"
            text={
              <ul>
                <li>
                  People using mobile devices, small screens and limited device
                  controls, etc.
                </li>
                <li>
                  People with situational limitations such as in different light
                  settings, in noisy environment, etc.
                </li>
                <li>People with slow internet connections.</li>
              </ul>
            }
            divider={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default HeaderPage;
