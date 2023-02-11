// import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../create-complaint/postcomplaint.module.css'
import Postcomplaint from "../post-complaint/post-complaint";
import SideBar from "../sidenav/sidenav";
export default function PostComplaintPage() {
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
                           <Postcomplaint/>
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