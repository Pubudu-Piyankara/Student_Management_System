import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            }
        ]


    }
])


