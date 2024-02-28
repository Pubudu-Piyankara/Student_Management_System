import {createBrowserRouter} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Student from "../pages/Student";
import { ChangeEvent } from "react";

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
        element: <Student addText={""} on={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
        } } inputConfigs={[]} />,
    },	
  
])


