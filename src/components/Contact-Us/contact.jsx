import Navbar from '../navbar/navbar'
import style from '../Contact-Us/contact.module.css'
import Image from 'next/image'
import img from '../../../public/contact.jpg'
import phone from '../../../public/phonelogo.png'
import Link from 'next/link'
import Footer from '../footer/footer'
export default function Contact() {
    return (
        <div>
            <div >
                <Navbar />
            </div>
            <div className={style.container}>
                <Image className={style.logo}
                    src={img}
                    alt="Picture of the author"
                />
            </div>
            <div>
                <p className={style.paragharaph}>
                    Hire Me provides you with the best <Link className={style.decoration} href="/emp-login">handyman services</Link>  at your doorstep. We offer you a very simple way of contacting us. One of the easiest ways is just to dial our number which is mentioned on our site and get in touch with us. Another method to contact us is to email us at our <Link className={style.decoration} href="/emp-login">email address</Link>  which is mentioned underneath and we respond to you as soon as possible. Hire Me gives you the best handyman services at affordable rates with 24/7 assistance. You can avail of all these services by contacting us or simply filling out the form below.
                </p>
                <div className={style.dev}>
                    <div>
                        <Image className={style.logo1}
                            src={phone}
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <p className={style.contact}>Contact Us:0309 2471327</p>
                    </div>
                </div>
                <div className={style.dev}>
                    <div>
                        <Image className={style.logo1}
                            src={phone}
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <p className={style.contact}>Contact Us:0309 4519558</p>
                    </div>
                </div>
                <div className={style.dev}>
                    <div>
                        <Image className={style.logo1}
                            src={phone}
                            alt="Picture of the author"
                        />
                    </div>
                    <div>
                        <p className={style.contact}>Contact Us:0312 7458303</p>
                    </div>
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
    )
}