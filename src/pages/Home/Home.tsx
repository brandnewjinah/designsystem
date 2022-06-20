import React from "react";

//import libraries
import styled from "styled-components";

//import components
import { Main, Wrapper } from "../../components/Layout/Containers";
import Table from "../../components/Table";

//import assets
import { neutral } from "../../components/Token";
import Cover from "../../assets/Cover.jpg";

//import local data
import { deviceData } from "../../data/deviceData";
import { Header } from "../../components/Layout/Header";

const Home = () => {
  return (
    <Wrapper>
      <Header
        title="Design System"
        subtitle="This design system includes guidelines I researched and created to
        design and develop more efficiently. Focused around user experience,
        accessibility and clean code. It's following WCAG accessibility
        guidelines."
      />
      <ImageContainer>
        <img src={Cover} />
      </ImageContainer>

      <Main>
        <Divider />
        <Section>
          <h3>Tools and stacks</h3>
          <p>
            I used <em>Figma</em> to design and <em>React</em> and{" "}
            <em>TypeScript</em> to code.
          </p>
        </Section>
        <Divider />
        <Section>
          <h3>Cross browser/device testing</h3>
          <p>Currently being tested on the following devices and browsers:</p>

          <Table
            data={deviceData}
            keys={["platform", "device", "os", "browser", "resolution"]}
            showId={false}
          />
        </Section>
      </Main>
    </Wrapper>
  );
};

const Section = styled.section`
  margin: 2em 0 3em;

  table {
    margin-top: 2em;
  }
`;

const ImageContainer = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;

const Divider = styled.hr`
  border: none;
  height: 1px;
  background-color: ${neutral[300]};
  margin: 4em 0;
`;

export default Home;
