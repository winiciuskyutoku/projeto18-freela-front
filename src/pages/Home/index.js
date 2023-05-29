import { useContext, useEffect, useState } from "react"
import { MainContainer, UserContainer, PostContainer, NewPostButton, Search } from "./style"
import UserContext from "../../contexts/UserContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"
import { FollowersContainer } from "../Followers/style"

export default function Home() {
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const { username, token, id } = useContext(UserContext)
    const [posts, setPosts] = useState([])
    const [name, setName] = useState("")
    const [search, setSearch] = useState(false)

    const navigate = useNavigate()

    useEffect(() => {
        if (lsUser === null) {
            navigate("/signin")
        }

        const config = {
            headers: { Authorization: `Bearer ${token}` }
        }
        const url = `${process.env.REACT_APP_API_URL}/`

        axios.get(url, config).then(sucess => setPosts(sucess.data)).catch(fail => console.log(fail))
    }, [])

    if (posts.length === 0) {
        return (
            <div>
                Carrregando...
            </div>
        )
    }

    function searchUser(e) {
        e.preventDefault()

        const url = `${process.env.REACT_APP_API_URL}/users`
        const body = { name }

        axios.post(url, body).then(sucess => {
            setName("")
            setSearch(sucess.data)
        }).catch(fail => alert(fail.response.data.message))
    }

    if (search !== false) {
        return (
            <MainContainer>
                <form onSubmit={searchUser}>
                    <input type="search" value={name} onChange={(e) => setName(e.target.value)}></input>
                    <button type="submit"><Search /></button>
                </form>
                <FollowersContainer>
                    <div>
                        <img src={search.image} onClick={() => navigate(`/user/${search.id}`)}></img>
                    </div>
                    <div>
                        <h1>{search.name}</h1>
                        <p>{search.description}</p>
                    </div>
                </FollowersContainer>
            </MainContainer>
        )
    }

    return (
        <MainContainer>
            <form onSubmit={searchUser}>
                <input type="search" value={name} onChange={(e) => setName(e.target.value)}></input>
                <button type="submit"><Search /></button>
            </form>
            <UserContainer>
                <div>
                    <img src={posts[0].image}></img>
                </div>
                <div>
                    <h1>{posts[0].name}</h1>
                    <p>{posts[0].description}</p>
                    <div>
                        <button onClick={() => navigate(`/followers/${id}`)}>Ver seguidores</button>
                        <button onClick={() => navigate(`/following/${id}`)}>Ver quem eu sigo</button>
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



