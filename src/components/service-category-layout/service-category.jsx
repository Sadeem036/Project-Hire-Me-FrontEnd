import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../service-category-layout/service-category.module.css'
import ServiceCategory from '../service-category/service-category';
export default function GetServices() {
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
                           <ServiceCategory/>
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