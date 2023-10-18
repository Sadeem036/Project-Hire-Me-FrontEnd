import style from '../customer-navbar/customernav.module.css'
import logoImg from '../../../public/logo12.jpg'
import Image from 'next/image'
import Link from 'next/link'
import CustomerLogout from '../customer-logout/customer-logout'
import Router, { useRouter } from 'next/router'

export default function CustomerNav(props) {
    const router = useRouter()
    return (
        <div className={style.container}>
                <div onClick={props.onClick}>
                <Image onClick={()=> router.push("/customer")} className={style.logo1}
                    src={logoImg}
                    alt="Picture of the author"
                    
                />
                </div>
        
            <div className={style.nav}>
                <ul className={style.ul}>
                    <li className={style.li}><Link  href="/">Home</Link></li>
                    <li className={style.li}><Link href="">About Us</Link></li>
                    <li className={style.li}><Link href="/contact">Contact Us</Link></li>
                    <li><CustomerLogout/></li>
                </ul>
            </div>
        </div>




    )
}