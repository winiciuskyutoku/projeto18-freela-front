import { styled } from "styled-components";

export const FollowersMainContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    margin-top: 20px;
    h1{
        font-weight: 700;
        font-size: 25px;
    }
`

export const FollowersContainer = styled.div`
    width: 80%;
    height: 180px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #000000;

    div:first-child {
        img {
            width: 120px;
            height: 120px;
            border-radius: 99px;
        }

    }

    div:nth-child(2){
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 70%;
        height: 120px;
        word-wrap: break-word;

        h1{
            font-weight: 700;
            font-size: 20px;
        }
        p {
            font-weight: 400;
            font-size: 18px;
        }
    }
`