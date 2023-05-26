import { styled } from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 80%;
    gap: 15px;
    height: 600px;
    input, button {
        height: 25px;
        border-radius: 3px;
        padding: 5px;
    }
`

const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

export {
    Form,
    MainContainer
}