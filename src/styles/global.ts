import {createGlobalStyle} from 'styled-components';


const globalStyle = createGlobalStyle`
    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    html, body, #root {
        height: 100%;

    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #F8FDFF;
        font-family: 'Poppins', sans-serif;
        width: 100vw;
    }
    button {
        background-color: none;
        border: none;
        outline: none;
    }
    a{
        text-decoration: none;
        outline: none;
    }

`

export default globalStyle;

