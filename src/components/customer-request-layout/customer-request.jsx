import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../customer-request-layout/customer-request.module.css'
import SideBar from "../customer-side-bar/customer-side-bar";
import CustomerRequest from "../customer-request/customer-request";
export default function CustomerRequestLayout() {
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
                        <div className={style.setting}>
                            <CustomerRequest />
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