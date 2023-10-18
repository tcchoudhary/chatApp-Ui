import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../Authentication/Login'
import Homepage from '../Pages/Homepage'
const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Homepage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes