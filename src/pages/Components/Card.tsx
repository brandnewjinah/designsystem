import React, { useState } from "react";
import styled from "styled-components";

//components
import { Header } from "../../components/Layout/Header";
import { Section } from "../../components/Layout/Section";
import { Article } from "../../components/Layout/Article";
import { Cards } from "../../components/Cards/Cards";
import Table from "../../components/Table";
import { ratio } from "../../components/Token";
import Grid from "../../components/Layout/Grid";

//syntax
import SyntaxHighlighter from "react-syntax-highlighter";
import { atelierEstuaryLight } from "react-syntax-highlighter/dist/esm/styles/hljs";
import * as Code from "../../data/code/card";

//data
import { cardData } from "../../data/propsData";

const CardPage = () => {
  return (
    <Wrapper>
      <Header
        title="Card"
        subtitle="Card is a rectangular container that groups related contents and
        actions about a single subject."
      />
      <Main>
        <Section title="Example">
          <Grid>
            <Cards
              imgsrc="http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg"
              ratio={ratio.portrait_34}
              title="title fjieowjf j fjieowjf jifo jifowjio jioejwofji jiojf jeiwo"
              subtitle="subtitle"
              price="$10.00"
            />
            <Cards
              imgsrc="http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg"
              ratio={ratio.portrait_34}
              title="title"
              subtitle="subtitle"
              price="$10.00"
            />
            <Cards
              imgsrc="http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg"
              ratio={ratio.portrait_34}
              title="title"
              subtitle="subtitle"
              price="$10.00"
            />
            <Cards
              imgsrc="http://res.cloudinary.com/fw7128/image/upload/v1637292169/c3vwqzpuvtdyigvk068z.jpg"
              ratio={ratio.portrait_34}
              title="title"
              subtitle="subtitle"
              price="$10.00"
            />
          </Grid>
        </Section>
        <Section title="Guidelines">
          <Article
            title="Images"
            text={
              <ul>
                <li>By default, an image is sized at 1:1 aspect ratio.</li>
                <li>
                  Give a proper aspect ratio depending on the card type. For
                  example, a movie poster should have an aspect ratio of 2:3.
                </li>
                <li>
                  Aspect ratio should be calculated in percentage. For a movie
                  poster, it's (3 / 2) * 100 = 150%.
                </li>
                <li>
                  Common aspect ratio percentage is calculated in the ratio
                  token.
                </li>
              </ul>
            }
          />
        </Section>
        <Section title="Implementation for React">
          <SyntaxHighlighter language="javascript" style={atelierEstuaryLight}>
            {Code.card}
          </SyntaxHighlighter>
        </Section>
        <Section title="Props" divider={false}>
          <Table
            data={cardData}
            listSize={10}
            keys={["property", "type", "default", "required"]}
            showId={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Main = styled.main``;

export default CardPage;
