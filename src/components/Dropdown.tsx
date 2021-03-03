import React, { FC } from "react";

//import librart
import Select from "react-select";

//import styles and assets
import styled from "styled-components";
import { neutral } from "./Token";

interface Props {
  data: {}[];
  label?: string;
  placeholder?: string;
  isMulti?: boolean;
  style?: "underline";
  color?: string;
  margin?: string;
}

type StyleProps = {
  margin?: string | undefined;
};

export const Dropdown: FC<Props> = ({
  data,
  label,
  margin,
  placeholder,
  isMulti,
  style,
  color,
}) => {
  const customStyles = {
    control: (styles: any) => ({
      ...styles,
      border: style === "underline" && 0,
      borderBottom: style === "underline" && `1px solid #d2d2d7`,
      boxShadow: style === "underline" && "none",
      borderRadius: style === "underline" ? 0 : `.35em`,
      paddingTop: `.25em`,
      paddingBottom: `.25em`,
      //   minWidth: `auto`,
    }),
    option: (styles: any, state: any) => ({
      ...styles,
      backgroundColor: state.isDisabled
        ? null
        : state.isSelected
        ? color
          ? color
          : neutral[100]
        : state.isFocused
        ? color
          ? color
          : neutral[100]
        : null,
      // backgroundColor: state.isDisabled
      //   ? null
      //   : state.isSelected
      //   ? `#de576d`
      //   : state.isFocused
      //   ? `#de576d`
      //   : null,
    }),
    placeholder: (styles: any) => ({
      ...styles,
      fontSize: `.925rem`,
      color: `${neutral[200]}`,
    }),
  };

  return (
    <Wrapper margin={margin}>
      <p>{label}</p>
      <Select
        isMulti={isMulti}
        options={data}
        placeholder={
          placeholder
            ? placeholder
            : isMulti
            ? "Select all that apply"
            : "Select"
        }
        styles={customStyles}
        components={{
          IndicatorSeparator: () => null,
          ClearIndicator: () => null,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div<StyleProps>`
  margin: ${(props) => `${props.margin} 0`};

  p {
    font-size: 0.925rem;
    line-height: 1.875rem;
    color: ${neutral[400]};
  }
`;
