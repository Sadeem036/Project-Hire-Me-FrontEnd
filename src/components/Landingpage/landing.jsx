import Footer from "@/components/footer/footer";
import Homepage from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import style from '@/components/Landingpage/landing.module.css'
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