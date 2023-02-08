import React from 'react'
import style from '@/components/sidenav/sidenav.module.css'

export default function SideBar() {
    return (
        <div >
            <div className={style.container}>
                <ul>
                    <h1>Name</h1>
                    <li><a href="">Notifications</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><a href="">Complaint</a></li>
                    <li><a href="">Profile Settings</a></li>
                    <li><a href="">Log out</a></li>
                </ul>
            </div>
        </div>
    )
}
