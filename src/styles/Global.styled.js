import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
    overflow-x: hidden;
}
    body{
        margin: unset;
        padding: unset;
        box-sizing: border-box;
        background-color: #110C00;
        color: #FFFFFF;
        font-family: 'Sora', sans-serif;
        font-weight: 400;


    }
`

export default GlobalStyle;