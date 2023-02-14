import style from '../customer-navbar/customernav.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
import Link from 'next/link'
import LogoutButton from '../logout-button/logout-button'
import Router, { useRouter } from 'next/router'

export default function CustomerNav(props) {
    const router = useRouter()
    return (
        <div className={style.container}>
                <div onClick={props.onClick}>
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