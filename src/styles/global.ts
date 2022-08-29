import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;

        box-sizing: border-box;
    }

    button{
        background-color: transparent;
        border: none;
        outline: none;
    }

    html, body, #root {
        height: 100vh;
    }

    body, input-security, textarea, button{
        font-family: 'Poppins', sans-serif;
    }

    body{
        background-color: #F8FDFF;
    }

    a{
        text-decoration: none;
        outline: none;
    }

    ul{
        list-style: none;
    }
     
`