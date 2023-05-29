import { styled } from "styled-components"
import { AiOutlineSearch } from "react-icons/ai"

export const Search = styled(AiOutlineSearch)`
    color: white;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    form {
        width: 100%;
        display: flex;
    
        justify-content: center;

        input {
            width: 70%;
            height: 50px;
            padding: 7px;
            box-sizing: border-box;
            font-size: 20px;
            border: 1px solid #000000;
        }
        button {
            width: 10%;
            box-sizing: border-box;
            border:none;
            background-color: #000000;
        }
    }
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
export const PostContainer = styled.div`
    width: 80%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
    box-sizing: border-box;
    gap: 10px;

    border: 1px solid #000000;
    img {
        width: 100%;
        height: 450px;
    }
    div:nth-child(2) {
        display: flex;
        width: 100%;
        justify-content: space-between;
        font-size: 18px;
        margin-bottom: 15px;
        div{
            display: flex;
            gap: 5px;
        }
    }
    div:nth-child(3){
        display:flex;
        justify-content: flex-start;
        width: 100%;
    }
`

export const NewPostButton = styled.button`
    position: fixed;
    z-index: 2;
    width: 50px;
    height: 50px;
    bottom: 10px;
    right: 10px;
    border-radius: 90px;
`