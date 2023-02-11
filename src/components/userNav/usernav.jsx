import style from '../userNav/usernav.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '../logout-button/logout-button'

export default function UserNav() {
    return (
        <div className={style.container}>
                <div>
                <Image className={style.logo}
                    src={logoImage}
                    alt="Picture of the author"
                />
                </div>
        
            <div className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><Link  href="/">Home</Link></li>
                    <li className={style.li}><Link href="">About Us</Link></li>
                    <li className={style.li}><Link href="/contact">Contact Us</Link></li>
                    <li><LogoutButton/></li>
                </ul>
            </div>
        </div>




    )
}