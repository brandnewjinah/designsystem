export const implement = `
    import Layout from "./components/Layout";

    const Routes = () => {
    return (
        <Router>
            <Switch>
                <Layout>
                    ...
                </Layout>
            </Switch>
        </Router>
        );
    };
`;

export const breakpoint = `
    import styled from "styled-components";
    import {breakpoint} from './components/Token';

    ...

    const Component = styled.div\`

        @media \${breakpoint.m}\ {
        }

        @media \${breakpoint.lg}\ {
        }

        @media \${breakpoint.xlg}\ {
        }
    \`;
    
`;

export const token = `
    export const size = {
        m: "640px",
        lg: "1024px",
        xlg: "1280px",
    };
    
    export const breakpoint = {
        m: \`(min-width: \${size.m}\)\`,
        lg: \`(min-width: \${size.lg}\)\`,
        xlg: \`(min-width: \${size.xlg}\)\`,
    };
`;
