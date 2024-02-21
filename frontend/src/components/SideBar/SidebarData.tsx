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
        path:'/dashboard',
        icon:<RxDashboard />,
        cName:'nav-text'
        
    },
    {
        title: 'Student',
        path: '/student',
        icon: <PiStudent />,
        cName: 'nav-text'
    },
    {
        title:'Academics',
        path:'/academics',
        icon:<SiMicrosoftacademic />,
        cName:'nav-text'
    },
    {
        title:'Non-Academics',
        path:'/nonacademics',
        icon:<MdOutlineAdminPanelSettings />,
        cName:'nav-text'
    },
    {
        title:'Messages',
        path:'/massages',
        icon:<FiMessageSquare />,
        cName:'nav-text'
    },
    {
        title:'Profile',
        path:'/profile',
        icon:<CgProfile />,
        cName:'nav-text'
    }
];