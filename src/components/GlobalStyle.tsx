import { createGlobalStyle } from "styled-components";
import { colors } from "./StyleVariables";

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

    li {
        color: ${colors.gray};
    }

    a {
        text-decoration: none; 
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

    h1 {
        color: ${colors.darkgray};
        font-size: 3rem;
       line-height: 3rem;

    }

    h2 {
        color: ${colors.darkgray};
        font-size: 2.125rem;
        margin-bottom: 1.05rem;
    }

    h3 {
        color: ${colors.darkgray};
        font-size: 1.5rem;
        margin-bottom: .75rem;
    }

    h4 {
        color: ${colors.darkgray};
        font-size: 1.25rem;
        margin-bottom: .625rem;
    }

    h5 {
        color: ${colors.darkgray};
        font-size: 1rem;
        margin-bottom: .25rem;
    }

    p {
        font-size: 1rem;
        line-height: 1.5rem;
    }

    em {
        font-style: normal;
        font-weight: 700;
        color: ${colors.pink};
    }

    pre {
        padding: 1em !important;
        line-height: 1.5rem;
    }

    code {
        font-size: .675rem;
        padding: 1em; 
    }
    
`;

export default GlobalStyle;
