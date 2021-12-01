import React, { FC } from "react";
import styled from "styled-components";
import { typeScale, neutral } from "../Token";
import { More } from "../../assets/Icons";
import { Button } from "../Buttons/Button";

interface Props {
  preview?: string;
  title?: string;
  subtitle?: string;
  headerAction?: any;
  footerTitle?: string;
  footerSub?: string;
  children?: any;
}

export const Cards: FC<Props> = ({
  preview,
  title,
  subtitle,
  headerAction,
  footerTitle,
  footerSub,
  children,
}) => {
  return (
    <Wrapper>
      {preview && (
        <Preview>
          <img src={preview} />
        </Preview>
      )}
      <Content>
        <Header>
          <Title>
            {title && <p className="title">{title}</p>}
            {subtitle && <p className="helper">{subtitle}</p>}
          </Title>
          {headerAction && headerAction}
        </Header>
        <Body>{children}</Body>
        <Footer>
          <div className="left">
            <div className="top">{footerTitle}</div>
            <div className="bottom">{footerSub}</div>
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
  height: 225px;
  background-color: #eee;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
