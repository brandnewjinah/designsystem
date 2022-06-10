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

    ol {
        list-style-type: none;
    }

    li {
        line-height: 1.875rem;
    }

    a {
        text-decoration: none; 
        cursor: pointer;

        &:visited {
            color: ${neutral[700]}
        }
    }

    button {
        cursor: pointer;

      
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
        font-size: ${fontSize.sm2};
        border-radius: 0.25rem;
        padding: .25rem;   
        margin: 0 0.25rem;
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
    }
    
`;

export default GlobalStyle;
