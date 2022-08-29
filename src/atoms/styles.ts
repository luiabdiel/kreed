import styled from "styled-components"

export const Button = styled.button`
    width: 130px;
    height: 42px;

    border: 1px solid #17A4D0;
    border-radius: 4px;

    margin-left: 50px;

    font-size: 14px;
    color: #17A4D0;

    cursor: pointer;

    transition: .2s;

    box-shadow: 5px 5px 0 0 #17A4D0;
    font-weight: 500;

    &:hover{
        background-color: #17A4D0;
        color: #FFF;
        box-shadow: 0 0 0 0 transparent;
    }
`