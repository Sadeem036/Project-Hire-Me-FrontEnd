import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import UpdateSettings from '../profile-setting/profile-setting';
import style from '../profile-layout/profile.module.css'
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
                            <UpdateSettings />
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