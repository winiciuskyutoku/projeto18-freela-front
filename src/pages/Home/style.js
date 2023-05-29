import { styled } from "styled-components"

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

export const UserContainer = styled.div`
    width: 80%;
    height: 250px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000000;

    div:first-child {
        img {
            width: 150px;
            height: 150px;
            border-radius: 99px;
        }

        height: 150px;
    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 150px;
        width: 70%;

        h1{
            font-weight: 700;
            font-size: 20px;
        }
        p {
            font-weight: 400;
            font-size: 18px;
        }

        div{
            display: flex;
            gap: 20px;
            button {
                width: 25%;
            }
        }
    }
`
