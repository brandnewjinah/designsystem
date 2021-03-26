import React, { FC } from "react";
import styled from "styled-components";
import { typeScale, neutral } from "../Token";
import { More } from "../../assets/Icons";
import { Button } from "../Buttons/Button";

interface Props {
  title?: string;
  subtitle?: string;
  children?: any;
}

export const Cards: FC<Props> = ({ title, subtitle, children }) => {
  return (
    <Wrapper>
      <Preview>
        <img src="" />
      </Preview>
      <Content>
        <Header>
          <Title>
            {title && <p className="title">{title}</p>}
            {subtitle && <p className="helper">{subtitle}</p>}
          </Title>
          <More width={20} height={20} color="#000" stroke={2} />
        </Header>
        <Body>{children}</Body>
        <Footer>
          <div className="left">
            <div className="top">$1000</div>
            <div className="bottom">Footer Sub</div>
          </div>
          <Button label="Button" variant="primary" shape="rounded" />
        </Footer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  border: 1px solid #ebebf9;
`;

const Preview = styled.figure`
  width: 100%;
  padding-top: 56.25%;
  background-color: #eee;

  img {
    object-fit: contain;
  }
`;

const Content = styled.div`
  padding: 1rem 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ebebf9;
  padding: 1rem 0;

  .left {
    display: flex;
  }

  .title {
    font-size: ${typeScale.body};
    font-weight: 500;
  }

  .helper {
    font-size: 0.75rem;
    color: ${neutral[400]};
  }
`;

const Title = styled.div``;

const Body = styled.div`
  padding: 1rem 0;
  border-bottom: 1px solid #ebebf9;

  p {
    font-size: 0.875rem;
    line-height: 1.5rem;
  }
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  .top {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 1.5rem;
  }

  .bottom {
    font-size: 0.75rem;
    color: ${neutral[400]};
    line-height: 1rem;
  }
`;
