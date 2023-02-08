import Footer from "@/components/footer/footer";
import Homepage from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import style from '@/components/Lanidingpage/landing.module.css'
import Employee from "../Employee/emp";

export default function Landingpage() {
    return (
        <div className={style.container} >
            <div>
                <Navbar />
            </div>
            <div>
                <Homepage />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}