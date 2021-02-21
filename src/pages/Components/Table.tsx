import React, { useState } from "react";

//import libraries
import styled from "styled-components";

//import components
import Table from "../../components/Table";
import Pagination from "../../components/Pagination";

//import assets
import { colors } from "../../components/Colors";
import Cover from "../../assets/Cover.jpg";
import Anatomy from "../../assets/components/Table_DT_Anatomy.jpg";
import AnatomyMobile from "../../assets/components/Table_Mobile_Anatomy.jpg";

//import local data
import { deviceData } from "../../data/deviceData";

const Home = () => {
  return (
    <Wrapper>
      <Header>
        <h1>Table</h1>

        <Article>
          <p>
            Data tables are used to organize and display sets of data across
            rows and columns.
          </p>
        </Article>
      </Header>

      <Main>
        <Section>
          <h3>Interactive Demo</h3>
          <Table
            data={deviceData}
            keys={["platform", "device", "os", "browser", "resolution"]}
            showId={false}
          />
          {/* <Pagination
            dataLength={data.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            handleNext={handleNext}
            handlePrev={handlePrev}
          /> */}
        </Section>
        <Divider />
        <Section>
          <h3>Desktop Anatomy</h3>
          <ImageContainer>
            <img src={Anatomy} />
          </ImageContainer>
          <Article>
            <ul>
              <li>
                <strong>1. Column Header</strong>: Asc and desc sort available
                on click.
              </li>
              <li>
                <strong>2. Rows</strong>
              </li>
              <li>
                <strong>3. Pagination</strong>
              </li>
            </ul>
          </Article>
        </Section>
        <Divider />
        <Section>
          <h3>Responsive Anatomy</h3>
          <ImageContainer>
            <img src={AnatomyMobile} />
          </ImageContainer>
          <Article>
            <ul>
              <li>
                <strong>1. Sticky Header</strong>: Asc and desc sort available
                on click.
              </li>
              <li>
                <strong>2. Rows</strong>: Scrollable
              </li>
              <li>
                <strong>3. Default Browser Scroll</strong>
              </li>
              <li>
                <strong>4. Pagination</strong>
              </li>
            </ul>
          </Article>
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
  margin-bottom: 4em;
`;

const Article = styled.article`
  font-size: 1rem;
  margin: 1em 0;
`;

const Main = styled.main``;

const Section = styled.section`
  h3 {
    margin-bottom: 1em;
  }
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
  background-color: ${colors.lightergray};
  margin: 4em 0;
`;

export default Home;
