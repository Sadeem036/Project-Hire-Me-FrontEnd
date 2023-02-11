import React from 'react'
import style from '../sidenav/sidenav.module.css'
import Link from 'next/link'

export default function CustomerSideBar() {
    return (        
            <div className={style.container}>
                <ul>
                    <h1 className={style.header}>Profile </h1>
                    <li><Link href="/notification">Notifications</Link></li>
                    <li><Link href="">Reviews</Link></li>
                    <li><Link href="/post-complaint">Complaint</Link></li>
                    <li><Link href="/customer-settings-page">Profile Settings</Link></li>
                    
                </ul>
            </div>   
    )
}
