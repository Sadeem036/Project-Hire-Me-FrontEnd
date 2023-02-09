import React from "react"
import Link from "next/link"
import style from '@/components/paragraph/paraghraph.module.css'
import Image from "next/image"
import img from '../../../public/mobile.jpg'

export default function Paraghraph() {
    return (
        <div className={style.container}>
            <div className={style.paraghraph}>
                <h1 className={style.h1}>Why Choose Uncle Fixer Services?</h1>
                <p>Hire Me is Pakistan most trustworthy top service provider. It's an online platform that connects customers and fixers for their needs and <Link className={style.decoration} href="/emp-login">Services</Link>. The Uncle Fixer crew will always be there for you in the event of a problem.The following are the most important aspects of our success:
                </p>
                <p className={style.h2}>Waranty</p>
                <p>
                    Enjoy 7 days work complain warranty on jobs done. If the task completed proves unsatisfactory, after 7 days. You can recall the same fixer or another as per your liking. You can also do complain through the app.
                </p>
                <p className={style.h2}>Punctuality</p>
                <p>
                    Hire Me Team is concerned about fixing problems quickly. Therefore anytime you want assistance, there is always a fixer accessible. Because the fixers you discover are dependent on their location. You will always be able to find someone who is closer to you. The Fixer is restricted to their commitment with customers to resolve the problem sooner.
                </p>
                <p className={style.h2}>Customer satisfaction guaranteed</p>
                <p>
                    Last but not the least, your happiness and utility are all we care about. Hire Me has a solid infrastructure that includes information on fixer evaluations and warranties. To assure you get exactly what you paid for or maybe even more.
                </p>
                <p className={style.h2}>Inspection or security charges</p>
                <p>
                    When Hire Me comes to check your problem, you will not be charged even a single dime. However, Fixers deserves to get visit charges payment. You can avail fixer as you like and choose the one of your best. The Fixer will understand your situation while staying inside your budget.
                </p>
            </div>
            <div>
                <Image className={style.logo}
                    src={img}
                    alt="Picture of the author"
                />
            </div>
        </div>
    )
}