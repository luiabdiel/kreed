import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    button{
        background-color: none;
        border: none;
        outline: none;
    }

    html, body, #root {
        height: 100vh;
    }

    body{
        background-color: #F8FDFF;
    }

    a{
        text-decoration: none;
        outline: none;
    }
     
`