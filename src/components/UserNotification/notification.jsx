import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../UserNotification/notification.module.css'
import GetNotification from '../notification/notification';
export default function Usernotification() {
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
                    <GetNotification/>
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
        </>

    )
}