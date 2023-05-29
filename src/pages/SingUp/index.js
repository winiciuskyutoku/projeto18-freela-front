import { useState } from "react"
import { Form, MainContainer } from "../../Components/Form"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function SignUp(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [image, setimage] = useState("")
    const [description, setDescription] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const navigate = useNavigate()

    function signUp(e){
        e.preventDefault()

        const url = `${process.env.REACT_APP_API_URL}/signup`
        const body = {name, email, image, description, password, confirmPassword}

        axios.post(url, body).then(sucess => console.log(sucess.data)).catch(fail => alert(fail.response.data.message))
    }

    return (
        <MainContainer>
            <Form onSubmit={signUp}>
                <input type="text" placeholder="nome" onChange={(e) => setName(e.target.value)} required></input>
                <input type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} required></input>
                <input type="url" placeholder="sua foto de perfil" onChange={(e) => setimage(e.target.value)} required></input>
                <input type="text" placeholder="descricao" maxlength="200" onChange={(e) => setDescription(e.target.value)}></input>
                <input type="password" placeholder="senha" minlength="3" onChange={(e) => setPassword(e.target.value)} required></input>
                <input type="password" placeholder="confirme senha" minlength="3" onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                <button type="submit">CADASTRAR</button>
                <a onClick={() => navigate("/signin")}>Ja possui uma conta? Logue aqui</a>
            </Form>
        </MainContainer>
    )
}