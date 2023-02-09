import Footer from "@/components/footer/footer";
import Homepage from "@/components/home/home";
import Navbar from "@/components/navbar/navbar";
import style from '@/components/Landingpage/landing.module.css'
import Paraghraph from "../paragraph/paraghraph";
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
                <Paraghraph/>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
    )
}