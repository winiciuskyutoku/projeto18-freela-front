import { FollowersMainContainer, FollowersContainer } from "../Followers/style"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { port } from "../../port"
import axios from "axios"

export default function Following() {
    const lsUser = JSON.parse(localStorage.getItem("token"))
    const [data, setData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        if (lsUser === null) {
            navigate("/")
        }

        const url = `${port}/following/${id}`

        axios.get(url).then(sucess => setData(sucess.data)).catch(fail => console.log(fail.response))
    }, [])

    const { id } = lsUser

    if (data.length === 0) {
        return (
            <FollowersMainContainer>
                <h1>Seguindo</h1>
            </FollowersMainContainer>
        )
    }

    return (
        <FollowersMainContainer>
            <h1>Seguindo</h1>
            {data.map(follower => {
                return (
                    <FollowersContainer>
                        <div>
                            <img src={follower.image} onClick={() => navigate(`/user/${follower.id}`)}></img>
                        </div>
                        <div>
                            <h1>{follower.name}</h1>
                            <p>{follower.description}</p>
                        </div>
                    </FollowersContainer>
                )
            })}
        </FollowersMainContainer>
    )
}