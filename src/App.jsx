import {Route, Routes} from "react-router-dom";
import {ProtectRoute} from "./components/page/ProtectRoute.jsx";
import Lending from "./components/page/Lending.jsx";
import Login from "./components/page/Login.jsx";
import Register from "./components/page/Register.jsx";
import "./assets/style/App.scss"

function App() {
    return (
        <div className="page">
            <Routes>
                <Route path="test_project2/" element={<ProtectRoute element={<Lending/>}/>}/>

                <Route path="test_project2/login" element={<Login/>}/>
                <Route path="test_project2/register" element={<Register/>}/>
            </Routes>
        </div>
    )
}

export default App
