import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Grid from "../../../components/Grid";
import Swatch from "../../../components/Cards/Swatch";
import Section from "../../../components/Section";

//import assets
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { neutrals, blue } from "../../../data/colorData";

const Colors = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Colors</h1>
        <Article>
          <p>
            Color is used to draw attention, group elements, convey meaning,
            generate mood and enhance aesthetics.
          </p>
        </Article>
        <Main>
          <ColorSection>
            <h5>Neutrals</h5>
            <Grid>
              {neutrals.map((color, idx) => (
                <div key={idx} className="span2">
                  <Swatch
                    name={color.name}
                    value={color.value}
                    textInverted={color.textInverted}
                  ></Swatch>
                </div>
              ))}
            </Grid>
          </ColorSection>
          <ColorSection>
            <h5>Blue</h5>
            <Grid>
              {blue.map((color, idx) => (
                <div key={idx} className="span2">
                  <Swatch
                    name={color.name}
                    value={color.value}
                    textInverted={color.textInverted}
                  ></Swatch>
                </div>
              ))}
            </Grid>
          </ColorSection>
          <Section title="Implementation for React">
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
  import { neutral } from "components/Token";

  <Component
    color={neutral.n400}
  />
  `}
            </SyntaxHighlighter>
          </Section>
          <Section
            title="My Code Process"
            text="Like CSS variables, I created a variable file that holds color values. Colors are grouped into palettes, then colors file is exported from the Token index."
            divider={false}
          >
            <SyntaxHighlighter
              language="javascript"
              style={atelierEstuaryLight}
            >
              {`
  ├── components
  │   └── Token
  │       └── index.js
  │       └── colors.js


  --index.js--
  export * from "./colors";


  --colors.js--
  export const neutral = {
    n000: "#ffffff",
    n100: "#E7E7EC",
    n200: "#C4C4CF",
    n300: "#A0A1B2",
    n400: "#838494",
    n500: "#505165",
    n600: "#2A2A43",
    n700: "#12143F",
  };

  export const blue = {
    ...
  }

  export const coral = {
    ...
  }
  `}
            </SyntaxHighlighter>
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

const ColorSection = styled.section`
  h5 {
    margin-bottom: 1em;
  }

  padding: 2em;
`;

export default Colors;
