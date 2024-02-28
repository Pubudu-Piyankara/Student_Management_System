// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { PiStudent } from "react-icons/pi";
import { SiMicrosoftacademic } from "react-icons/si";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { FiMessageSquare } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";

export const SidebarData = [
    {
        title:'Dashboard',
        path:'/',
        icon:RxDashboard ,
        cName:'nav-text',
        margin:true
        
    },
    {
        title: 'Student',
        path: '/student',
        icon: PiStudent,
        cName: 'nav-text',
        margin: true
    },
    {
        title:'Teachers',
        path:'/teachers',
        icon:SiMicrosoftacademic,
        cName:'nav-text',
        margin:true

    },
    {
        title:'Non-Academics',
        path:'/nonacademics',
        icon:MdOutlineAdminPanelSettings,
        cName:'nav-text',
        margin:true
    },
    {
        title:'Messages',
        path:'/massages',
        icon:FiMessageSquare ,
        cName:'nav-text',
        margin:true
    },
    {
        title:'Profile',
        path:'/profile',
        icon:CgProfile ,
        cName:'nav-text',
        margin:true
    }
];