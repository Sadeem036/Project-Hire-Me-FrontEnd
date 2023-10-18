import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../profile-layout/profile.module.css'
import Settings from '../emp-settings/settings';
export default function UpdateLayout() {
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
                           <Settings/>
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