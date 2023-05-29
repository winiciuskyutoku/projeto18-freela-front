import { useEffect, useState } from "react"
import { FollowersContainer, FollowersMainContainer } from "./style"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export default function Followers() {
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const [data, setData] = useState([])  
    const navigate = useNavigate()

    useEffect(() => {
        if (lsUser === null) {
            navigate("/")
        }

        const url = `${process.env.REACT_APP_API_URL}/followers/${id}`

        axios.get(url).then(sucess => setData(sucess.data)).catch(fail => console.log(fail.response))
    }, [])

    const { id } = lsUser

    if (data.length === 0) {
        return (
            <FollowersMainContainer>
                <h1>Seguidores</h1>
            </FollowersMainContainer>
        )
    }

    return (
        <FollowersMainContainer>
            <h1>Seguidores</h1>
            {data.map(follower => {
                return (
                    <FollowersContainer>
                        <div>
                            <img src={follower.followerImage} onClick={() => navigate(`/user/${follower.followerId}`)}></img>
                        </div>
                        <div>
                            <h1>{follower.followerName}</h1>
                            <p>{follower.followerDescription}</p>
                        </div>
                    </FollowersContainer>
                )
            })}
        </FollowersMainContainer>
    )
}

