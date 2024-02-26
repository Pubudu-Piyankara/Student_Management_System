import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Student from "../pages/Student";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        // children: [
        //     {
        //         path: "/",
        //         element: <Dashboard />,
        //     }
           
        // ],
    },
    {
        path: "/student",
        element: <Student />,
    },	
  
])


