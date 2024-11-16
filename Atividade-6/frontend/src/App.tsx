import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./screens/Register";
import NotFound from "./screens/NotFound";
import Home from "./screens/Home";
import List from "./screens/List";
import Edit from "./screens/Edit";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/register" element={<Register />} />
                <Route path="/list" element={<List />} />
                <Route path="/edit" element={<Edit />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}