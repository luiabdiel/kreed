import styled from "styled-components";

export const MenuList = styled.ul`
    display: flex;
    gap: 20px;

    margin-left: auto;
`

export const ItemList = styled.li`
    a{
        color:#1E255E;
        font-weight: 500;
        font-size: 14px;

        transition: .2s;
    }

    a:hover{
        color: #17A4D0;
    }
`