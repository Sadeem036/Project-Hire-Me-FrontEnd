import CustomerSideBar from "../customer-side-bar/customer-side-bar";
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../profile-layout/profile.module.css'
import CustomerSettings from '../customer-settings/customer-settings';
export default function CustomerProfileLayout() {
    return (
        <>
            <div className={style.container} >
                <div>
                    <UserNav />
                </div>
                <div className={style.show}>
                    <div>
                        <CustomerSideBar />
                    </div>
                    <div className={style.setting}>
                        <div className={style.settings}>
                           <CustomerSettings/>
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