// import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../create-complaint/postcomplaint.module.css'
import Postcomplaint from "../post-complaint/post-complaint";
import AdminSideBar from "../admin-sidebar/admin-sidebar";
export default function AdminSideBarLayout() {
    return (
        <>
            <div className={style.container} >
                <div>
                    <UserNav />
                </div>
                <div className={style.show}>
                    <div>
                        <AdminSideBar />
                    </div>
                </div>
                <div className={style.shows}>
                    <Footer />
                </div>
            </div>
        </>
    )
}