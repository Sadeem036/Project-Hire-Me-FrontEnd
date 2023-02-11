import React from 'react'
import style from '@/components/sidenav/sidenav.module.css'
import Link from 'next/link'

export default function SideBar() {
    return (        
            <div className={style.container}>
                <ul>
                    <h1 className={style.header}>Profile </h1>
                    <li><Link href="/notification">Notifications</Link></li>
                    <li><Link href="">Reviews</Link></li>
                    <li><Link href="/complaint">Complaint</Link></li>
                    <li><Link href="">Profile Settings</Link></li>
                    <li><Link href="/">Log out</Link></li>
                </ul>
            </div>   
    )
}
