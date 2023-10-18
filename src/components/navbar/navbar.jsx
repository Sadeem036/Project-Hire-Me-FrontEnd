import style from '../navbar/navbar.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import Link from 'next/link'

export default function Navbar() {
    const router = useRouter()
    return (
        <div className={style.container}>
            <div className={style.image}>
                <div >
                    <Image className={style.logo}
                        src={logoImage}
                        alt="Picture of the author"
                    />
                </div>
            </div>
            <div className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><Link href="/">Home</Link></li>
                    <li className={style.li}><Link href="/about-us">About Us</Link></li>
                    <li className={style.li}><Link href="/contact">Contact Us</Link></li>
                </ul>
            </div>

            <div className={style.button}>
                <button onClick={()=>{router.push("/signup-customer")}} className={style.customer}>Customer</button>
                <button onClick={()=>{router.push("/signup-emp")}} className={style.employee}>Employee</button>
            </div>
       </div>
    )
}