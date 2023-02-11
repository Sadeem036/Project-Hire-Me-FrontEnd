import React from 'react'
import style from '../home/home.module.css'
import Image from 'next/image'
import digital from '../../../public/img.jpg'
import Link from 'next/link'
export default function Homepage() {
    return (

        <div className={style.container}>
            <div className={style.text}>
                <h1>Digital <Link  className={style.hireme} href="/emp-login"> Hire Me Training</Link>Programs</h1>
            </div>
            <div>
                <Image className={style.img}
                    src={digital}
                    alt="Picture of the author"
                />
            </div>     
        </div>
    )
}
