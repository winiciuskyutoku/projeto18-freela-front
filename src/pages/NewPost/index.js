import { useContext, useState } from "react";
import { MainContainer, Form } from "../../Components/Form";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { port } from "../../port";


export default function NewPost(){
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const {token} = useContext(UserContext)
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")

    const navigate = useNavigate()

    useEffect(() => {
        if(lsUser === null){
            navigate("/signin")
        }

    }, [])

    function createNewPost(e){
        e.preventDefault()

        const config = {
            headers: {Authorization: `Bearer ${token}`}
        }
        const url = `${port}/new-post`
        const body = {image, description}

        console.log(url, config)
        axios.post(url, body ,config).then(sucess => navigate("/")).catch(fail => console.log(fail))
    }

    return (
        <MainContainer>
            <Form onSubmit={createNewPost}>
                <input type="url" required placeholder="Url da foto" onChange={(e) => setImage(e.target.value)}></input>
                <input type="text" required placeholder="Descricao" onChange={(e) => setDescription(e.target.value)}></input>
                <button type="submit">CRIRAR POST</button>
            </Form>
        </MainContainer>
    )
}