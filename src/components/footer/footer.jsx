import style from '../footer/footer.module.css'
import Image from 'next/image'
import img1 from '../../../public/phone1.png'
import img2 from '../../../public/whatsapp.png'
import img3 from '../../../public/gmail.png'
import img4 from '../../../public/location.png'


export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.about}>
                <h1>About</h1>
                <p className={style.paragraph}>Hire Me is Pakistan's most reputable top Handyman Services provider and one of the first freelancing sites. Our mission is to accomplish two goals with single action. We offer productivity in both customer and worker's (fixers) lives.</p>
                <div>
                    <div className={style.phone}>
                        <div>
                            <Image className={style.img}
                                src={img1}
                                alt="Picture of the author"
                            />
                        </div>
                        <div> 03448684461</div>
                    </div>
                    <div className={style.whatsapp}>
                        <div> 
                        <Image className={style.img}
                                src={img2}
                                alt="Picture of the author"
                            />
                        </div>
                        <div > 03127458303</div>
                    </div>
                    <div className={style.gmail}>
                        <div>
                        <Image className={style.img}
                                src={img3}
                                alt="Picture of the author"
                            />
                        </div>
                        <div>mujahidsharif@gmail.com</div>
                    </div>
                    <div className={style.location}>
                        <div>
                        <Image className={style.img}
                                src={img4}
                                alt="Picture of the author"
                            />
                        </div>
                        <div>CodeNinja lnc.</div>
                    </div>
                </div>
            </div>
            <div className={style.usefulllinks}>
                <h1>UsefulLinks</h1>
                <li><a href=''>AC Services</a></li>
                <li><a a href=''>Boiler & Heater Services</a></li>
                <li><a a href=''>Electrician Services</a></li>
                <li><a a href=''>Plumber Services</a></li>
                <li><a a href=''>Carpentry Services</a></li>
                <li><a a href=''>Furniture Polish Services</a></li>
                <li><a a href=''>Home Appliances Services</a></li>
            </div>
            <div className={style.usefulllinks}>
                <h1>UsefulLinks</h1>
                <li><a href=''>AC Services</a></li>
                <li><a a href=''>Boiler & Heater Services</a></li>
                <li><a a href=''>Electrician Services</a></li>
                <li><a a href=''>Plumber Services</a></li>
                <li><a a href=''>Carpentry Services</a></li>
                <li><a a href=''>Furniture Polish Services</a></li>
                <li><a a href=''>Home Appliances Services</a></li>
            </div>
        </div>
    )
}