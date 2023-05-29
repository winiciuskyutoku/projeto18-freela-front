import { Form, MainContainer } from "../../Components/Form";
import { useContext, useEffect, useState } from "react";
import {port} from "../../port"
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setToken, setUserName} = useContext(UserContext)
    const lsUser = JSON.parse(localStorage.getItem("token"))

    const navigate = useNavigate()

    useEffect(() => {
        if(lsUser !== null){
            navigate("/")
        }
    }, [lsUser])

    function signIn(e){
        e.preventDefault()

        const url = `${port}/signin`
        const body = {email, password}

        axios.post(url, body).then(sucess => {
            console.log(sucess.data)
            setToken(sucess.data.token)
            setUserName(sucess.data.username)
            localStorage.setItem("token", JSON.stringify({username: sucess.data.username, token: sucess.data.token}))
        }).catch(fail => alert(fail.response.data.message))
    }

    return (
        <MainContainer>
            <Form onSubmit={signIn}>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="senha"></input>
                <button type="submit">LOGIN</button>
            </Form>
        </MainContainer>
    )
}