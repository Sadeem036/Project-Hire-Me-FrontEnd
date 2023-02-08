// import style from '@/components/Stauts/Status.module.css'
import SideBar from '../sidenav/sidenav';
import Userstatus from '../Stauts/Status';
import UserNav from "../userNav/usernav";
import style from '@/components/Employee/emp.module.css'
import Footer from '../footer/footer';
export default function NavBar() {
    return (
        <div className={style.container} >
            <div>
                <UserNav />
            </div>
            <div className={style.show}>
                
                <div>
                    <SideBar/>
                </div>
                
                    <div>
                        <Userstatus/>
                    </div>

                </div>

                <div><Footer/></div>
                </div>

    )
}