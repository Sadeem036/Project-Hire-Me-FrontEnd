import SideBar from '../sidenav/sidenav';
import Userstatus from '../Stauts/Status';
import UserNav from "../userNav/usernav";
import style from '@/components/Employee/emp.module.css'
import Footer from '../footer/footer';
export default function User() {
    return (
        <>
        <div className={style.container} >
            <div>
                <UserNav />
            </div>
            <div className={style.show}>

                <div>
                    <SideBar />
                </div>

                <div>
                    <Userstatus />
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
        </>

    )
}