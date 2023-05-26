import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SingUp";
import SignIn from "./pages/SignIn";
import UserContext from "./contexts/UserContext";
import { useState } from "react";

function App() {
  const lsUser = JSON.parse(localStorage.getItem("token"))
  const [token, setToken] = useState(lsUser !== null ? lsUser.token : "")
  const [username, setUserName] = useState(lsUser !== null ? lsUser.username : "")

  return (
    <>
      <UserContext.Provider value={{token, setToken, username, setUserName}}>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/signin" element={<SignIn />}></Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </>
  );
}

export default App;
