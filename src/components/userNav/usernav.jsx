import style from '@/components/userNav/usernav.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'

export default function UserNav() {
    return (
        <div className={style.container}>
            <div className={style.text}>
                <div>
                <Image className={style.logo}
                    src={logoImage}
                    alt="Picture of the author"
                    width="10px"
                    height="10x"
                />
                </div>
                <div>
                <p >Hire Me</p>
                </div>
            </div>

            <div className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><a href="#home">Home</a></li>
                    <li className={style.li}><a href="#contact">Contact</a></li>
                    <li className={style.li}><a href="#about">About</a></li>
                </ul>
            </div>
        </div>




    )
}