import React from "react";

//import libraries
import styled from "styled-components";

//import components
import Table from "../../components/Table";

//import assets
import { colors } from "../../components/StyleVariables";
import Cover from "../../assets/Cover.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Design System</h1>

        <Article>
          <p>
            This design system includes guidelines I researched and created to
            design and develop more efficiently. Focused around user experience,
            accessibility and clean code.
          </p>
        </Article>
        <ImageContainer>
          <img src={Cover} />
        </ImageContainer>
      </Header>

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

const Wrapper = styled.div`
  h1 {
    font-family: "Lora", serif;
  }
`;

const Header = styled.header`
  margin-bottom: 2em;
`;

const Article = styled.article`
  margin: 1em 0;
`;

const Main = styled.main``;

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
  background-color: ${colors.gray_2};
  margin: 4em 0;
`;

export default Home;
