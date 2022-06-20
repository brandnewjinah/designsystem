import React, { useState } from "react";
import styled from "styled-components";

//import components
import { Main, Wrapper, Article } from "../../components/Layout/Containers";
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import Text from "../../components/Text";
import Table from "../../components/Table";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/typography";

//data
import { typographyData } from "../../data/propsData";

const TypographyPage = () => {
  return (
    <Wrapper>
      <Header
        title="Typography"
        subtitle="Block of text to create clear hierarchies, organize information and
        present content clearly and efficiently."
      />
      <Main>
        <Section
          title="When to use"
          text="When you need to display text contents on a page and keep them clear and consistent."
        />
        <Section title="Type Styles">
          <TypeScale>
            <Article>
              <Text variant="h1">Header 1</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h1{" "}
                <span className="sub">SIZE:</span> fontSize.lg5{" "}
                <span className="sub">WEIGHT:</span> 700
              </Text>
            </Article>
            <Article>
              <Text variant="h2">Header 2</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h2{" "}
                <span className="sub">SIZE:</span> fontSize.lg3{" "}
                <span className="sub">WEIGHT:</span> 600
              </Text>
            </Article>
            <Article>
              <Text variant="h3">Header 3</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h3{" "}
                <span className="sub">SIZE:</span> fontSize.lg2{" "}
                <span className="sub">WEIGHT:</span> 600
              </Text>
            </Article>
            <Article>
              <Text variant="h4">Header 4</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h4{" "}
                <span className="sub">SIZE:</span> fontSize.lg1{" "}
                <span className="sub">WEIGHT:</span> 600
              </Text>
            </Article>
            <Article>
              <Text variant="h5">Header 5</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h5{" "}
                <span className="sub">SIZE:</span> fontSize.base{" "}
                <span className="sub">WEIGHT:</span> 600
              </Text>
            </Article>
            <Article>
              <Text variant="h6">Header 6</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> h6{" "}
                <span className="sub">SIZE:</span> fontSize.sm2{" "}
                <span className="sub">WEIGHT:</span> 600
              </Text>
            </Article>
            <Article>
              <Text variant="body_big">Big Body</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> body_big{" "}
                <span className="sub">SIZE:</span> fontSize.lg1{" "}
                <span className="sub">WEIGHT:</span> n/a
              </Text>
            </Article>
            <Article>
              <Text>Body</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> n/a{" "}
                <span className="sub">SIZE:</span> fontSize.base{" "}
                <span className="sub">WEIGHT:</span> n/a
              </Text>
            </Article>
            <Article>
              <Text variant="body_small">Small Body</Text>
              <Text variant="caption">
                <span className="sub">VARIANT:</span> body_small{" "}
                <span className="sub">SIZE:</span> fontSize.sm1{" "}
                <span className="sub">WEIGHT:</span> n/a
              </Text>
            </Article>
            <Article>
              <Article>
                <Text variant="caption">Caption</Text>
                <Text variant="caption">
                  <span className="sub">VARIANT:</span> h1{" "}
                  <span className="sub">SIZE:</span> fontSize.lg4{" "}
                  <span className="sub">WEIGHT:</span>700
                </Text>
              </Article>
            </Article>
          </TypeScale>
        </Section>
        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.typography}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={typographyData}
            listSize={10}
            keys={["property", "type", "default", "required"]}
            showId={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const TypeScale = styled.div`
  background-color: #fcfcf9;
  padding: 1rem 3rem;
  margin: 1rem 0;

  .sub {
    display: inline-block;
    text-transform: uppercase;
    font-weight: 500;
    color: #a8a8a8;
    /* margin-top: 1rem; */

    &:not(:first-child) {
      margin-left: 1rem;
    }
  }
`;

export default TypographyPage;
