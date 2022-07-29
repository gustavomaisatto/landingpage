import styled from "styled-components";

export const MenuList = styled.ul`
    display: flex;
    margin-left: auto;
    gap: 25px;
    margin-right: 25px;
`


export const ItemList = styled.li`
    display: inline-block;
    font-weight: 500;
    
    &:hover{
        a{
            color: #17a4d0;
        }
    }
    a{
        transition: color 0.25s ease;
        color: #1E255E;
    }
`