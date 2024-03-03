import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Student from "../pages/Student";
import { ChangeEvent, MouseEvent } from "react";
import Login from "../pages/Login";
import Teacher from "../pages/Teachers";
import Administration from "../pages/Administration";
import Messages from "../pages/Messages";
import Profile from "../pages/Profile";
import Update from "../pages/Update";
import Details from "../pages/Details";
import Search from "../pages/Search";

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
                path: '/student/:id',
                element: <Student addText={"Add"} on={function (e: ChangeEvent<HTMLInputElement>): void {
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
    },
    {
        path : "/update/:id",
        element: <Update handleUpdate={function (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void {
            throw new Error("Function not implemented.");
        } } handelChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
        } } />,
    },
    {
        path:"/details/:id",
        element: <Details />,
    },
    {
        path: "/search",
        element: <Search />,
    }
  
])


