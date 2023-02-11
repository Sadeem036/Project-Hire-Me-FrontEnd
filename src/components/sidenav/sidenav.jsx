import React from 'react'
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
                    
                </ul>
            </div>
       
    )
}
