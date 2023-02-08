import React from 'react'
import style from '@/components/home/home.module.css'
import Image from 'next/image'
import digital from '../../../public/img.jpg'
export default function Homepage() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <h1>Digital Hire Me Training Programs</h1>
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
