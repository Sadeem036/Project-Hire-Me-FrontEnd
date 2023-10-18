// import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../complete-service-layout/complete-service.module.css'
import SideBar from "../sidenav/sidenav";
import CompleteService from "../complete-service/complete-service";
export default function CompleteServiceLayout() {
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
                    
                        <div className={style.settings}>
                           <CompleteService/>
                        </div>
                    
                </div>
                <div className={style.shows}>
                    <Footer />
                </div>
            </div>
        </>
    )
}