import { createGlobalStyle, css} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        word-wrap: break-word;
    }

    html {
        ::-webkit-scrollbar {
            display: none;
        }
        -ms-overflow-style: none;    
        scrollbar-width: none;
        line-height: 1.6;
        /* Footer support */
        position: relative;
        min-height: 100%;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: ${ ({theme}) => theme.colors.background };
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins';
        ${(props) => 
            props.primary && css`
                color: props.theme.colors.primary
            `
        }
    }
    
    h1 {
        font-size: 2.25rem;
        font-weight: 900;
    }

    h2 {
        font-size: 1.75rem;
        font-weight: 800;
    }

    h5 {
        font-size: 1.25rem;
        font-weight: 600;
        line-height: 30px;
    }

    h6 {
        font-size: 1rem;
        font-weight: 600;
        line-height: 24px;
    }


`;

export default GlobalStyle;