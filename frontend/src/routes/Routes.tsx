import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Student from "../pages/Student";
import { ChangeEvent } from "react";
import Login from "../pages/Login";
import Teacher from "../pages/Teachers";
import Administration from "../pages/Administration";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Login Login={undefined} />,
    
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        
    },
    {
        path: "/student",
        element: <Student addText={""} on={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
        } } />,
        children: [
            {
                path: '/student/add',
                element: <Student addText={"Add"} on={function (e: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                } } />
            },
            {
                path: '/student/delete',
                element: <Student addText={"Delete"} on={function (e: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                } } />
            },
            {
                path: 'edit/:student_Id',
                element: <Student addText={"edit "} on={function (e: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                } } />
            },

        ]
    },	
    {
        path: "/teachers",
        element: <Teacher />,
    },
    {
        path: "/admin",
        element: <Administration/>,
    },
    {
        path: "/massages",
        element: <Messages />,
    },
    {
        path: "/profile",
        element: <Profile />,
    }
  
])


