import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        width: 100%;
        height: 100%;
    }
    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: white;
        font-size: 1.05rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    ul {
        list-style-type: none;
    }

    a {
        cursor: pointer;
    }

    button {
        cursor: pointer;

        &:focus {
    outline: 3px solid #c1e0fe;
    outline: 3px solid rgba(131, 192, 253, 0.5);
    outline-offset: 1px;
  }
    }
    
`;

export default GlobalStyle;