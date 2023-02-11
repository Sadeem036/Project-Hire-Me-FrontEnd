import React from "react";
import UserNav from "../../components/userNav/usernav";
import SideBar from "../../components/sidenav/sidenav";
import GetComplaint from "../../components/complain/get-complain";
import Footer from "../../components/footer/footer";
import style from '../../styles/admin-complain.module.css'

export default function AdminComplaintPage(){
    return(
        <div>
        <UserNav/>
        <div className={style.container}>
        <SideBar/>
        <GetComplaint/>
        </div>
        <Footer/>
        </div>
    )
}