import { useNavigate, useParams } from "react-router-dom"
import { MainContainer, UserContainer, PostContainer } from "../Home/style"
import { useEffect, useState } from "react"
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { styled } from "styled-components"
import axios from "axios"

export default function FollowerProfile() {
    const navigate = useNavigate()
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const [data, setData] = useState([])
    const [liked, setLiked] = useState([])

    const { id } = useParams()

    useEffect(() => {
        if(lsUser === null){
            navigate("/signin")
        }

        if (lsUser.id === Number(id)) {
            navigate("/")
        }

        const url = `${process.env.REACT_APP_API_URL}/user/${id}`

        axios.get(url).then(sucess => {
            setData(sucess.data)
            /* {sucess.data[2].map(e => {
                setLiked([...liked, e.postId])
                console.log(liked, e.postId)
            })} */
            for(let i = 0; i < sucess.data[2].length; i++){
                liked.push(sucess.data[2][i].postId)
            }
        }).catch(fail => console.log(fail.response))
    }, [])

    if (data.length === 0) {
        return (
            <div>
                Carregando...
            </div>
        )
    }

    function follow(e){
        e.preventDefault()

        const body = {userId: id, followerId: lsUser.id}
        const url = `${process.env.REACT_APP_API_URL}/follow`
        axios.post(url, body).then(sucess => console.log(sucess.data)).catch(fail => alert(fail.response.data.message))
    }

    function like(postId, condition){        
        if(condition === true){
            setLiked([...liked, postId])
        }

        const url = `${process.env.REACT_APP_API_URL}/post/like/${postId}`
        const body = {condition, likedBy: lsUser.id, postOwnerId: id}
        axios.post(url, body).then(sucess => console.log(sucess.data)).catch(fail => console.log(fail.response.data))
    }

    return (
        <MainContainer>
            <UserContainer>
                <div>
                    <img src={data[0].image}></img>
                </div>
                <div>
                    <h1>{data[0].name}</h1>
                    <p>{data[0].description}</p>
                    <div>
                        <button onClick={follow}>Seguir</button>
                    </div>
                </div>
            </UserContainer>
            {data[1].map(post => {
                return (
                    <PostContainer>
                        <img src={post.image}></img>
                        <div>
                            <div>
                                {liked.includes(post.id) ? <Heart></Heart> : <OutlineHeart onClick={() => like(post.id, true)}/> }
                                <p>{liked.includes(post.id) ? "Curtido" : "Curtir"}</p>
                            </div>
                            <p>{post.createAt}</p>
                        </div>
                        <div>
                            <p>{post.description}</p>
                        </div>
                    </PostContainer>
                )
            })}
        </MainContainer>
    )
}

const OutlineHeart = styled(AiOutlineHeart)`
    color: red;
    width: 20px;
    height: 20px;
`
const Heart = styled(AiFillHeart)`
    color: red;
    width: 20px;
    height: 20px;
`