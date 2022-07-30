import styled from "styled-components";


export const Container = styled.button`
    font-family: 'poppins', sans-serif;
    width: 130px;
    height: 42px;
    border-radius: 4px;
    font-weight: 500;
    color:#13390D;
    border: 1px solid #13390D;
    background-color: transparent;
    cursor: pointer;
    font-size: 14px;
    margin-left: 25px;
    box-shadow: 0px 0px 17px -8px transparent;
    transition: all 0.25s ease-out;
    &:hover{
        color: #FFF;
        background-color: #13390D;
        box-shadow: 0px 0px 17px -5px #13390D;
    }
    
`