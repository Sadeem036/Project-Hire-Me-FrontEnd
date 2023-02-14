import React from 'react'
import style from '../admin-sidebar/admin-sidebar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import img from '../../../public/profilelogo.png'
import CustomButton from '../custombutton/custombutton'
import LogoutButton from '../logout-button/logout-button'

export default function AdminSideBar() {
    return (
        <div className={style.container}>
            <ul>
                <div className={style.profile}>

                    <Image className={style.logo}
                        src={img}
                        alt="Picture of the author"
                    />
                    <h1 className={style.header}>Admin</h1>
                </div>
                <li className={style.header1}>
                    <CustomButton name="Complaint" />
                </li>
                <li className={style.header1}>
                    <CustomButton name="Get Employee" />
                </li>
                <li className={style.header1}>
                    <CustomButton name="Get Customer" />
                </li>
                <li className={style.header1}>
                    <CustomButton name="See All Services" />
                </li>
                <li className={style.header1}>
                    <CustomButton name="Profile Settings" />
                </li>
            </ul>
        </div>
    )
}
