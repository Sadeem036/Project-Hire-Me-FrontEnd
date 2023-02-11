import style from '../userNav/usernav.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
<<<<<<< HEAD
import LogoutButton from '../logout-button/logout-button'
=======
import Link from 'next/link'
>>>>>>> 36fa7b34995398a044d6b4029c3daa0d9d23351e

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
<<<<<<< HEAD
                    <li className={style.li}><a href="">Home</a></li>
                    <li className={style.li}><a href="">Contact</a></li>
                    <li className={style.li}><a href="">About</a></li>
                    <li><LogoutButton/></li>
=======
                    <li className={style.li}><Link  href="/">Home</Link></li>
                    <li className={style.li}><Link href="">About Us</Link></li>
                    <li className={style.li}><Link href="/contact">Contact Us</Link></li>
>>>>>>> 36fa7b34995398a044d6b4029c3daa0d9d23351e
                </ul>
            </div>
        </div>




    )
}