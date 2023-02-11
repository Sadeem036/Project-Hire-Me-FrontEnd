import SideBar from "../components/sidenav/sidenav";
import UserNav from "../components/userNav/usernav";
import UserStatus from "../components/Stauts/Status";
import Footer from "../components/footer/footer";
import style from '../styles/emp.module.css'

export default function Employee() {
  return (
    
    <div className={style.container}>
    <div>
                <UserNav />
            </div>
            <div className={style.show}>

                <div>
                    <SideBar href="/emp-settings-page" complaintPage="/post-complaint" />
                </div>

                <div>
                    <UserStatus />
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
     
    </div>
   
  )
}