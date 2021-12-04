import React from "react";
import styled from "styled-components";
import { fontSize, lineHeight, neutral } from "../../../components/Token";

const LineHeight = () => {
  return (
    <Wrapper>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">sm3</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.sm3</span>
          </Item>
        </Header>
        <div className="example sm3">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">sm2</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.sm2</span>
          </Item>
        </Header>
        <div className="example sm2">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">sm1</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.sm1</span>
          </Item>
        </Header>
        <div className="example sm1">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">base</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.base</span>
          </Item>
        </Header>
        <div className="example base">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">lg1</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.lg1</span>
          </Item>
        </Header>
        <div className="example lg1">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">lg2</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.lg2</span>
          </Item>
        </Header>
        <div className="example lg2">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">lg3</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.lg3</span>
          </Item>
        </Header>
        <div className="example lg3">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">lg4</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.lg4</span>
          </Item>
        </Header>
        <div className="example lg4">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
      <Article>
        <Header>
          <Item>
            <span className="title">font size</span>
            <span className="token">lg5</span>
          </Item>
          <Item>
            <span className="title">line height</span>
            <span className="token">$lineHeight.lg5</span>
          </Item>
        </Header>
        <div className="example lg5">
          Morbi molestie, nisl eget sodales sollicitudin, purus dui auctor
          magna, eget faucibus augue massa quis sapien.
        </div>
      </Article>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: #505165;
  background-color: #fcfcf9;
  padding: 2rem;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;

  .example {
    max-width: 550px;
  }

  .sub {
    font-size: 0.75rem;
    font-weight: bold;
  }

  .sm3 {
    font-size: ${fontSize.sm3};
    line-height: ${lineHeight.sm3};
  }

  .sm2 {
    font-size: ${fontSize.sm2};
    line-height: ${lineHeight.sm2};
  }

  .sm1 {
    font-size: ${fontSize.sm1};
    line-height: ${lineHeight.sm1};
  }

  .base {
    font-size: ${fontSize.base};
    line-height: ${lineHeight.base};
  }

  .lg1 {
    font-size: ${fontSize.lg1};
    line-height: ${lineHeight.lg1};
  }

  .lg2 {
    font-size: ${fontSize.lg2};
    line-height: ${lineHeight.lg2};
  }

  .lg3 {
    font-size: ${fontSize.lg3};
    line-height: ${lineHeight.lg3};
  }

  .lg4 {
    font-size: ${fontSize.lg4};
    line-height: ${lineHeight.lg4};
  }

  .lg5 {
    font-size: ${fontSize.lg5};
    line-height: ${lineHeight.lg5};
  }
`;

const Header = styled.div`
  display: flex;
  gap: 1rem;
`;

const Item = styled.div`
  .title {
    color: #a8a8a8;
    text-transform: uppercase;
    padding-right: 0.5rem;
  }

  .token {
    font-weight: bold;
  }
`;

export default LineHeight;
