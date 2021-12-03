export const breakpoint = `
    import styled from "styled-components";
    import { fontSize, lineHeight } from './components/Token';

    ...

    const Component = styled.p\`

        font-size: \${fontSize.base}\ 
        line-height: \${lineHeight.base}\ 

    \`;
    
`;
