import Navbar from '../navbar/navbar'
import style from '../about-us/about-us.module.css'
import Link from 'next/link'
import Footer from '../footer/footer'
export default function AboutUs() {
    return (
        <div>
            <div >
                <Navbar />
            </div>
            <div className={style.container1}>
                <p className={style.paragharaph}>
                    <h1>Welcome To Hire Me</h1>
                    Hire Me provides you with the best <Link className={style.decoration} href="/emp-login">handyman services</Link>  at your doorstep. We offer you a very simple way of contacting us. One of the easiest ways is just to dial our number which is mentioned on our site and get in touch with us. Another method to contact us is to email us at our <Link className={style.decoration} href="/emp-login">email address</Link>  which is mentioned underneath and we respond to you as soon as possible. Hire Me gives you the best handyman services at affordable rates with 24/7 assistance. You can avail of all these services by contacting us or simply filling out the form below.
                </p>
            </div>
            <div className={style.text}>
                <div className={style.text1}>
                    <h1>Our Mission</h1>
                    Hire Me is always eager to go above and beyond to provide customers and fixers with what they desire and deserve. Hire Me is committed to its objectives. Hire Me was established with the goal of alleviating poverty and encouraging honesty and kindness. Our goal is to provide the most dependable and trustworthy home maintenance services . Hire Me will satisfy the customers as well as provide an unforgettable experience with us. Uncle Fixers other objective is to hire experienced fixers and putting their abilities to serve customers.
                    </div>
                <div className={style.text1}>
                    <h1>Our Value</h1>
                    In Pakistan, finding a technician who is professional, affordable, and punctual might be tricky. It is difficult to seek the assistance of a plumber, an electrician, or a fumigation service. Hire Me provides answers to your home, business, commercial, and official difficulties in the shortest amount of time. Currently, Uncle Fixer provides 50+ services to our residential and business clients. Soon increase our services by 100+ to your better support. Hire Me's goal is to provide services to our customers. Fixers also get paid from the freelancing platform and ensuring that everyone has an equal opportunity.
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
    )
}