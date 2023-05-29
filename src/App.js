import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SingUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import NewPost from "./pages/NewPost";
import Followers from "./pages/Followers";
import FollowerProfile from "./pages/FollowerProfile";
import Following from "./pages/Following";

function App() {
  const lsUser = JSON.parse(localStorage.getItem("token"))
  const [token, setToken] = useState(lsUser !== null ? lsUser.token : "")
  const [username, setUserName] = useState(lsUser !== null ? lsUser.username : "")
  const [id, setId] = useState(lsUser !== null ? lsUser.id : "" )

  return (
    <>
      <UserContext.Provider value={{token, setToken, username, setUserName, id, setId}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
            <Route path="/new-post" element={<NewPost/>}></Route>
            <Route path="/followers/:id" element={<Followers/>}></Route>
            <Route path="/user/:id" element={<FollowerProfile/>}></Route>
            <Route path="/following/:id" element={<Following/>}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
