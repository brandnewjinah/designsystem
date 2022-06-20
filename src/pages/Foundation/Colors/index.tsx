import React, { useState } from "react";

//import libraries
import styled from "styled-components";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Grid from "../../../components/Grid";
import { Swatch, SwatchWCAG } from "../../../components/Cards/Swatch";
import { Section } from "../../../components/Layout/Section";
import { neutral } from "../../../components/Token";

//import local data
import { neutrals, blue, peach } from "../../../data/colorData";
import * as Code from "../../../data/code/color";
import { Header } from "../../../components/Layout/Header";
import { Main, Wrapper } from "../../../components/Layout/Containers";
import { Article } from "../../../components/Layout/Article";

const Colors = () => {
  return (
    <Wrapper>
      <Header
        title="Color"
        subtitle="Color is used to draw attention, group elements, convey meaning,
            generate mood and enhance aesthetics."
      />
      <Main>
        <Section title="Color Palettes">
          <Subsection>
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
          </Subsection>
          <Subsection>
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
          </Subsection>
          <Subsection>
            <h5>Peach</h5>
            <Grid>
              {peach.map((color, idx) => (
                <div key={idx} className="span2">
                  <Swatch
                    name={color.name}
                    value={color.value}
                    textInverted={color.textInverted}
                    main={color.main}
                  ></Swatch>
                </div>
              ))}
            </Grid>
          </Subsection>
        </Section>
        <Section title="Accessibility">
          <Article
            title="WCAG 2 Contrast Ratio"
            text={
              <ul>
                <li>
                  It needs to comply with the{" "}
                  <a href="https://www.w3.org/TR/WCAG/" target="_blank">
                    WCAG AA
                  </a>{" "}
                  standard contrast ratios.
                </li>
                <li>
                  It can be tested on{" "}
                  <a
                    href="https://webaim.org/resources/contrastchecker"
                    target="_blank"
                  >
                    WebAIM.
                  </a>
                </li>
              </ul>
            }
          />
        </Section>
        <Section>
          <Grid>
            {peach.map((color, idx) => (
              <div key={idx} className="span2">
                <SwatchWCAG
                  lightText={color.lightText}
                  darkText={color.darkText}
                  value={color.value}
                  textInverted={color.textInverted}
                ></SwatchWCAG>
              </div>
            ))}
          </Grid>
        </Section>
        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.implement}
          </SyntaxHighlighter>
        </Section>
        <Section
          title="My Code Process"
          text="Like CSS variables, I created a variable file that holds color values. Colors are grouped into palettes, then colors file is exported from the Token index."
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.process}
          </SyntaxHighlighter>
        </Section>
        <Section
          title="Creating a Theme"
          text="Create a theme and name colors based on roles to make the process more effective."
          divider={false}
        >
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.theme}
          </SyntaxHighlighter>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Subsection = styled.section`
  h5 {
    font-weight: 500;
    color: ${neutral[600]};
    margin-bottom: 1em;
  }

  padding: 2em 0;
`;

export default Colors;
