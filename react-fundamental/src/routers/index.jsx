import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/index'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    }
])