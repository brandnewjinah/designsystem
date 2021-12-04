import React, { FC, useState } from "react";
import styled from "styled-components";

//comps
import { breakpoint, fontSize } from "./Token";

interface Props {
  user: string;
  imgSrc?: string;
  alt?: string;
  color?: string;
}

const Avatar: FC<Props> = ({ user, imgSrc, alt, color }) => {
  const [imgError, setImgError] = useState(false);

  const handleErrorImg = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (e.type === "error") {
      setImgError(true);
    }
  };

  return (
    <>
      {imgError ? (
        <Wrapper>
          <span>{user.charAt(0)}</span>
        </Wrapper>
      ) : !imgSrc ? (
        <Wrapper role="img" aria-label={alt ? alt : "avatar"} color={color}>
          <span>{user.charAt(0)}</span>
        </Wrapper>
      ) : (
        <Wrapper>
          <img onError={handleErrorImg} src={imgSrc} />
        </Wrapper>
      )}
    </>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${(props) => (props.color ? props.color : "#5d815d")};
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  span {
    font-size: ${fontSize.lg1};
    font-weight: 500;
    text-transform: uppercase;
    color: white;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${breakpoint.lg} {
  }
`;

export default Avatar;
