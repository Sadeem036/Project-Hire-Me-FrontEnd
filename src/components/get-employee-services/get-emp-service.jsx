import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../get-employee-services/get-emp-service.module.css';
import GetEmpService from '../get-emp-service/get-emp-service';
export default function GetEmpServiceLayout() {
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
                    <div className={style.setting}>
                        <div className={style.settings}>
                           <GetEmpService/>
                        </div>
                    </div>
                </div>
                <div className={style.shows}>
                    <Footer />
                </div>
            </div>
        </>
    )
}