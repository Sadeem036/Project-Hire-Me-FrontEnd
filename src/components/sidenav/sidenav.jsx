import React from 'react'
import style from '../sidenav/sidenav.module.css'
import Link from 'next/link'
import Image from 'next/image'
import img from '../../../public/profilelogo.png'

export default function SideBar() {
    return (
        <div className={style.container}>
            <ul>
                <div className={style.profile}>

                    <Image className={style.logo}
                        src={img}
                        alt="Picture of the author"
                    />
                    <h1 className={style.header}> Profile</h1>
                </div>
                <li><Link href="/notification">Notifications</Link></li>
                <li><Link href="/emp-reviews">Reviews</Link></li>
                <li><Link href="/post-complaint">Complaint</Link></li>
                <li><Link href="/emp-settings-page">Profile Settings</Link></li>
            </ul>
        </div>
    )
}
