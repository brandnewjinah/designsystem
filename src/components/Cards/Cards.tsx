import React, { FC } from "react";
import styled from "styled-components";
import { typeScale, neutral, fontSize, breakpoint } from "../Token";
import { More } from "../../assets/Icons";
import { Button } from "../Buttons/Button";

interface Props {
  imgsrc?: string;
  title?: string;
  subtitle?: string;
  ratio?: string;
  price?: string;
}

export const Cards: FC<Props> = ({ imgsrc, title, subtitle, ratio, price }) => {
  return (
    <Wrapper>
      {imgsrc && (
        <Preview ratio={ratio}>
          <img src={imgsrc} alt="" />
        </Preview>
      )}
      <Details>
        <p className="sub">{subtitle}</p>
        <h3 className="main">
          {(title || "").length > 26 ? `${title?.substring(0, 24)}...` : title}
        </h3>
        <p>{price}</p>
      </Details>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  color: #1b1b1b;
  background-color: #fff;
  display: flex;
  height: 100%;
  flex-direction: column;
  border-radius: 0.25rem;
`;

const Preview = styled.div<Props>`
  position: relative;
  display: block;
  max-width: 100%;

  &:before {
    content: "";
    display: block;
    padding-bottom: ${(props) => (props.ratio ? props.ratio : "100%")};
    width: 100%;
  }

  img {
    border: none;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Details = styled.div`
  width: 100%;
  font-size: ${fontSize.base};
  font-weight: 500;
  color: ${neutral[600]};
  padding: 0.25rem 0;

  h3 {
    font-size: ${fontSize.lg1};
    /* padding: 0.125rem 0; */
  }

  .sub {
    font-size: ${fontSize.sm2};
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: ${neutral[400]};
  }

  @media ${breakpoint.m} {
    h3 {
    }

    .sub {
      font-size: ${fontSize.sm3};
    }
  }
`;
