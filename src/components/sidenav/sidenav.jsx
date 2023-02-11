import React from 'react'
<<<<<<< HEAD
import Link from 'next/link'
import style from '../sidenav/sidenav.module.css'


export default function SideBar(props) {

    
    
        return (
        
            <div className={style.container}>
                <ul>
                    <h1 className={style.header}>Profile </h1>
                    <li><a href="">Notifications</a></li>
                    <li><a href="">Reviews</a></li>
                    <li><Link href={props.complaintPage}>Complaint</Link></li>
                    <li><Link href={props.href}>Profile Settings </Link></li>
                    
=======
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
>>>>>>> 36fa7b34995398a044d6b4029c3daa0d9d23351e
                </ul>
            </div>   
    )
}
