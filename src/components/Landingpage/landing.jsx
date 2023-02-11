import React from "react";
import Footer from '../footer/footer'
import Homepage from "../home/home";
import Navbar from "../navbar/navbar";
import style from '../Landingpage/landing.module.css'
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
                <Footer/>
            </div>
        </div>
    )
}