import { createGlobalStyle } from "styled-components";

import Bkg1 from "../assets/background-1.svg"
import Bkg2 from "../assets/background-2.svg"

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

        background: url(${Bkg2}) no-repeat 1010px, url(${Bkg1}) no-repeat 931px;
        background-size: cover;
    }

    a{
        text-decoration: none;
        outline: none;
    }

    ul{
        list-style: none;
    }
     
`