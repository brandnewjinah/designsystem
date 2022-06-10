import React from "react";

//import components

//import styles and assets
import styled from "styled-components";
import { Main, Wrapper } from "../../../components/Layout/Containers";
import { Header } from "../../../components/Layout/Header";
import { Section } from "../../../components/Layout/Section";
import Table from "../../../components/Table";
import Text from "../../../components/Text";

//data
import { gridData } from "../../../data/tableData";

const Grid = () => {
  return (
    <Wrapper>
      <Header
        title="Grid"
        subtitle="Grid system helps you align information and maintain consistent user experience. It is based on 12 grid system."
      />
      <Main>
        <Section title="Breakpoints">
          <Text>
            The grid system is responsive based on 4-column, 8-column, and
            12-column grids, suit different screen sizes.
          </Text>
          <Section divider={false}>
            <Table
              data={gridData}
              listSize={10}
              keys={["screen size", "margin", "columns"]}
              showId={false}
            />
          </Section>
          <h4>Grid columns</h4>
          <Container>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
          </Container>
        </Section>
        <Section>
          <h4>Layout examples</h4>
          <Container>
            <div className="span span6 mobile">1</div>
            <div className="span span8 tablet">1</div>
            <div className="span span12 desktop">1</div>
          </Container>
          <Container>
            <div className="span span2 mobile">1</div>
            <div className="span span2 mobile">2</div>
            <div className="span span4 tablet">1</div>
            <div className="span span4 tablet">2</div>
            <div className="span span6 desktop">1</div>
            <div className="span span6 desktop">2</div>
          </Container>
          <Container>
            <div className="span span4 desktop">1</div>
            <div className="span span4 desktop">2</div>
            <div className="span span4 desktop">3</div>
          </Container>
          <Container>
            <div className="span span2 tablet">1</div>
            <div className="span span2 tablet">2</div>
            <div className="span span2 tablet">3</div>
            <div className="span span2 tablet">4</div>
            <div className="span span3 desktop">1</div>
            <div className="span span3 desktop">2</div>
            <div className="span span3 desktop">3</div>
            <div className="span span3 desktop">4</div>
          </Container>
        </Section>
      </Main>
    </Wrapper>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;

  div {
    background-color: #dadeeb;
  }

  .span {
    background-color: #ebdada;
    margin: 0.5em 0;
  }

  .span2 {
    grid-column: span 2;
  }

  .span3 {
    grid-column: span 3;
  }

  .span4 {
    grid-column: span 4;
  }

  .span6 {
    grid-column: span 6;
  }

  .span8 {
    grid-column: span 8;
  }

  .span12 {
    grid-column: span 12;
  }

  .tablet {
    display: none;
  }

  .desktop {
    display: none;
  }

  @media (min-width: 640px) {
    grid-template-columns: repeat(8, 1fr);

    .mobile {
      display: none;
    }

    .tablet {
      display: block;
    }
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 22px;

    .tablet {
      display: none;
    }

    .desktop {
      display: block;
    }
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 26px;
  }
`;

export default Grid;
