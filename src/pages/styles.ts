import styled from "styled-components";


export const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: center;


        .mainleft{
            display: flex;
            flex-direction: column;
            justify-content: center;
            width: 50%;
            margin-left: 100px;
            
        }
        .mainright{
            display: flex;
            flex-direction: row;
            justify-content: center;
            width: 50%;
            height: 100%;
            background: no-repeat;
            object-fit: cover;
        }
        .mainleft div{
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 700;
            font-size: 64px;
            line-height: 83px;
            display: flex;
            align-items: flex-end;
            color: #13390D;
            width: 100%;
        }

        .mainleft p{
            font-family: 'IBM Plex Mono';
            width: 80%;
            margin-top: 20px;
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            color: rgba(19, 57, 13, 0.7);


        }

        .mainleft button {
            margin-top: 60px;
            background: #13390D;
            border-radius: 4px;
            width: 200px;
            height: 60px;
            font-family: 'IBM Plex Mono';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 18px;
            color: #FFFFFF;
            cursor: pointer;
            transition: all 0.25s;
            &:hover{
                background-color: #206e15;
            }
        }
        .mainright img {
            width: 100%;
            height: 100%;
            background: no-repeat;
            
        }

`