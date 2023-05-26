import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SingUp";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
