import { useContext, useEffect, useState } from "react"
import { MainContainer, UserContainer } from "./style"
import { styled } from "styled-components"
import UserContext from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import { port } from "../../port"
import axios from "axios"

export default function Home() {
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const { username, token } = useContext(UserContext)
    const [posts, setPosts] = useState([])

    const navigate = useNavigate()

    console.log(posts)

    useEffect(() => {
        if (lsUser === null) {
            navigate("/signin")
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const url = `${port}/`

        axios.get(url, config).then(sucess => setPosts(sucess.data)).catch(fail => console.log(fail))
    }, [])

    if(posts.length === 0){
        return (
            <div>
                Carrregando...
            </div>
        )
    }

    return (
        <MainContainer>
            <UserContainer>
                <div>
                    <img src={posts[0].image}></img>
                </div>
                <div>
                    <h1>{posts[0].name}</h1>
                    <p>{posts[0].description}</p>
                    <div>
                        <button>Ver seguidores</button>
                        <button>Ver quem eu sigo</button>
                    </div>
                </div>
            </UserContainer>
            {posts[1].map(post => {
                return (
                    <PostContainer>
                        <img src={post.image}></img>
                        <div>
                            <p>{post.likes} pessoas curtiram sua foto!</p>
                            <p>{post.createdAt}</p>
                        </div>
                        <div>
                            <p>{post.description}</p>
                        </div>
                    </PostContainer>
                )
            })}
            <NewPostButton onClick={() => navigate("/new-post")}>
                +
            </NewPostButton>
        </MainContainer>
    )
}

const PostContainer = styled.div`
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
    }
    div:nth-child(3){
        display:flex;
        justify-content: flex-start;
        width: 100%;
    }
`

const NewPostButton = styled.button`
    position: fixed;
    z-index: 2;
    width: 50px;
    height: 50px;
    bottom: 10px;
    right: 10px;
    border-radius: 90px;
`

