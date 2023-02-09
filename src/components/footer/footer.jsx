import style from '@/components/footer/footer.module.css'

export default function Footer() {
    return (
        <div className={style.container}>
            <div className={style.about}>
                <h1>About</h1>
                <p>Hire Me is Pakistan's most reputable top Handyman Services provider and one of the first freelancing sites. Our mission is to accomplish two goals with single action. We offer productivity in both customer and worker's (fixers) lives.</p>
                <div>
                    <div className={style.phone}>
                        <div>phone-icon</div>
                        <div> 03448684461</div>
                    </div>
                    <div className={style.whatsapp}>
                        <div> whatsapp-icon</div>
                        <div > 03127458303</div>
                    </div>
                    <div className={style.gmail}>
                        <div>gmail-icon</div>
                        <div>mujahidsharif@gmail.com</div>
                    </div>
                    <div className={style.location}>
                        <div>location-icon</div>
                        <div>codeNinja lnc.</div>
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