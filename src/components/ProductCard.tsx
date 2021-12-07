import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

//token and icons
import { fontSize, neutral, breakpoint } from "./Token";
import { ImageIcon } from "../assets/Icons";

export interface Props {
  imageUrl?: string;
  title?: string;
  sub?: string;
  text?: string;
}

const ProductCard: FC<Props> = ({ imageUrl, title, text, sub }) => {
  const [imgErr, setImgErr] = useState(false);

  const handleDefaultImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.type === "error") {
      setImgErr(true);
    }
  };

  return (
    <LinkContainer to="#">
      <ImageContainer>
        {imgErr ? (
          <EmptyImg>
            <ImageIcon width={20} height={20} color="#000" stroke={2} />
          </EmptyImg>
        ) : (
          <Image onError={handleDefaultImg} src={imageUrl} />
        )}
      </ImageContainer>
      <Details>
        <p className="sub">{sub}</p>
        <h3 className="main">
          {/* {title.length > 26 ? `${title.substring(0, 24)}...` : title} */}
          {title}
        </h3>
        <p>
          <span>{text}</span>
        </p>
      </Details>
    </LinkContainer>
  );
};

const Flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const LinkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  object-fit: cover;
  /* transition: opacity 0.1s linear; */
`;

const EmptyImg = styled.div`
  ${Flex}
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 150%;
  background-color: rgba(0, 0, 0, 0.1);

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  /* padding-bottom: 125%; */
  overflow: hidden;

  &:hover {
    ${Image} {
      opacity: 0.9;
    }
  }
`;

const Details = styled.div`
  ${Flex}
  align-items: flex-start;
  width: 100%;
  flex-direction: column;
  font-size: 0.75rem;
  line-height: 1.25rem;

  .title {
    width: 180px;
    display: inline-block;
    font-size: ${fontSize.sm1};
    font-weight: 500;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0.65em 0 0.25em;
  }

  @media (max-width: 1090px) {
    .title {
      width: 160px;
    }
  }

  @media (max-width: 800px) {
    .title {
      width: 130px;
    }
  }
`;

export default ProductCard;
