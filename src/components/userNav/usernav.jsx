import style from '../userNav/usernav.module.css'
import logoImage from '../../../public/logo.jpg'
import Image from 'next/image'
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
                    <li className={style.li}><a href="">Home</a></li>
                    <li className={style.li}><a href="">Contact</a></li>
                    <li className={style.li}><a href="">About</a></li>
                    <li><LogoutButton/></li>
                </ul>
            </div>
        </div>




    )
}