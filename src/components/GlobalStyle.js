import { createGlobalStyle } from "styled-components";
import { fontSize, lineHeight, neutral, primaryFont, typeScale } from "./Token";
import { normalize } from "polished";

const GlobalStyle = createGlobalStyle`
    ${normalize()}

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: ${primaryFont};
        font-size: ${fontSize.sm1};
        line-height: ${lineHeight.sm1};
    }

    ul {
        list-style-position: inside;
        text-indent: -1.4rem;
        padding-left: 1.4rem;
    }

    li {
        line-height: 1.875rem;
    }

    a {
        text-decoration: none; 
        cursor: pointer;
    }

    button {
        cursor: pointer;

      
    }

    h1 {
        color: ${neutral[700]};
        font-size: ${typeScale.header1};
        letter-spacing: 0.015rem;
    }

    h2 {
        color: ${neutral[700]};
        font-size: ${typeScale.header2};
        letter-spacing: 0.015rem;
    }

    h3 {
        color: ${neutral[700]};
        font-size: ${typeScale.header3};

    }

    h4 {
        color: ${neutral[700]};
        font-size: ${typeScale.header4};
        /* margin-bottom: .625rem; */
    }

    h5 {
        color: ${neutral[700]};
        font-size: ${typeScale.header5};
        font-weight: 500;
        /* margin-bottom: .25rem; */
    }

    h6 {
        color: ${neutral[700]};
        font-size: ${typeScale.header6};
        font-weight: 500;
        /* margin-bottom: .25rem; */
    }

    em {
        font-style: normal;
        font-weight: 700;
        color: ${neutral[700]};
    }

    pre {
        padding: 1em !important;
        line-height: 1.5rem;
    }

    code {
        font-size: .9rem;
        padding: .25rem;   
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
    }
    
`;

export default GlobalStyle;
