import React, { useState } from "react";

//import libraries
import styled, { css } from "styled-components/macro";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

//import components
import Table from "../../components/Table";
import { Section } from "../../components/Sections/Section";
import {
  primaryFont,
  secondaryFont,
  tertiaryFont,
  typeScale,
  neutral,
  secondaryTheme,
  tertiaryTheme,
} from "../../components/Token";

//import assets
import Typeface from "../../assets/components/Typography_Typeface.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const TypographyPage = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Typography</h1>
        <p>
          Typography helps create clear hierarchies, organize information and
          present content clearly and efficiently.
        </p>
      </Header>
      <Main>
        <Section
          title="Typeface"
          text="I use typefaces Inter, Lora and Raleway from Google Fonts"
          image={Typeface}
        ></Section>
        <Section title="Type Scale" text="Major Third type scale is applied.">
          <TypeScale>
            <article>
              <h1>Header 1</h1>
              <p className="helper">
                <span className="sub">SIZE:</span> 3.052rem/48.83px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <h2>Header 2</h2>
              <p className="helper">
                <span className="sub">SIZE:</span> 2.441rem/39.06px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <h3>Header 3</h3>
              <p className="helper">
                <span className="sub">SIZE:</span> 1.953rem/31.25px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <h4>Header 4</h4>
              <p className="helper">
                <span className="sub">SIZE:</span> 1.563rem/25.00px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <h5>Header 5</h5>
              <p className="helper">
                <span className="sub">SIZE:</span> 1.25rem/20.00px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <p>Body</p>
              <p className="helper">
                <span className="sub">SIZE:</span> 1rem/16.00px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING: </span> 1rem
              </p>
            </article>
            <article>
              <p className="helper">Helper</p>
              <p className="helper">
                <span className="sub">SIZE:</span> 0.8rem/12.80px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
            <article>
              <p className="caption">Caption</p>
              <p className="helper">
                <span className="sub">SIZE:</span> 0.64rem/10.24px{" "}
                <span className="sub">WEIGHT:</span>400{" "}
                <span className="sub">LETTER SPACING:</span> 1rem
              </p>
            </article>
          </TypeScale>
        </Section>
        <Section title="Font Pairing">
          <Pairing>
            <Article>
              <div>
                <h3 className="primaryHeader">Inter</h3>
                <p>
                  Body is Inter. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatibus veniam quisquam excepturi
                  asperiores eos, harum ipsum vel porro corporis ipsa!
                </p>
              </div>
              <div>
                <h3 className="secondaryHeader">Lora</h3>
                <p>
                  Body is Inter. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatibus veniam quisquam excepturi
                  asperiores eos, harum ipsum vel porro corporis ipsa!
                </p>
              </div>
              <div>
                <h3 className="tertiaryHeader">Raleway</h3>
                <p>
                  Body is Inter. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatibus veniam quisquam excepturi
                  asperiores eos, harum ipsum vel porro corporis ipsa!
                </p>
              </div>
            </Article>
            <Article>
              <div>
                <h3 className="secondaryHeader">Lora</h3>
                <p className="secondaryBody">
                  Body is Lora. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatibus veniam quisquam excepturi
                  asperiores eos, harum ipsum vel porro corporis ipsa!
                </p>
              </div>
              <div>
                <h3 className="primaryHeader">Inter</h3>
                <p className="secondaryBody">
                  Body is Lora. Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Voluptatibus veniam quisquam excepturi
                  asperiores eos, harum ipsum vel porro corporis ipsa!
                </p>
              </div>
            </Article>
          </Pairing>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Header = styled.header`
  h1 {
    font-family: ${secondaryFont};
  }

  p {
    margin: 2rem 0;
  }

  border-bottom: 1px solid ${neutral[200]};
  padding-bottom: 1em;
`;

const Main = styled.main``;

const TypeScale = styled.div`
  background-color: #fcfcf9;
  padding: 4rem 3rem;

  article {
    margin-bottom: 2rem;
  }

  .helper {
    font-size: ${typeScale.helper};
  }

  .sub {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    color: #a8a8a8;
    margin-top: 1rem;

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }

  .caption {
    font-size: ${typeScale.caption};
  }
`;

const Pairing = styled.div`
  .primaryHeader {
    font-size: ${typeScale.header3};
    font-weight: 600;
  }

  .secondaryHeader {
    font-family: ${secondaryTheme.heading};
    font-size: ${typeScale.header3};
    font-weight: 600;
  }

  .tertiaryHeader {
    font-family: ${tertiaryTheme.heading};
    font-size: ${typeScale.header3};
    font-weight: 600;
  }

  .secondaryBody {
    font-family: ${secondaryTheme.body};
  }
`;

const Article = styled.article`
  background-color: #fcfcf9;
  padding: 4rem 3rem;
  margin-bottom: 3em;

  div {
    margin-bottom: 2.5rem;
  }
`;

export default TypographyPage;
