import { Form, MainContainer } from "../../Components/Form";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function SignIn(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {setToken, setUserName, setId} = useContext(UserContext)
    const lsUser = JSON.parse(localStorage.getItem("token"))

    const navigate = useNavigate()

    useEffect(() => {
        if(lsUser !== null){
            navigate("/")
        }
    }, [lsUser])

    function signIn(e){
        e.preventDefault()

        const url = `${process.env.REACT_APP_API_URL}/signin`
        const body = {email, password}

        axios.post(url, body).then(sucess => {
            console.log(sucess.data)
            setToken(sucess.data.token)
            setUserName(sucess.data.username)
            setId(sucess.data.userId)
            localStorage.setItem("token", JSON.stringify({username: sucess.data.username, token: sucess.data.token, id: sucess.data.userId}))
        }).catch(fail => alert(fail.response.data.message))
    }

    return (
        <MainContainer>
            <Form onSubmit={signIn}>
                <input type="email" required onChange={(e) => setEmail(e.target.value)} placeholder="email"></input>
                <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="senha"></input>
                <button type="submit">LOGIN</button>
                <a onClick={() => navigate("/signup")}>Ainda nao tem uma conta? Se cadastre aqui!</a>
            </Form>   
        </MainContainer>
    )
}