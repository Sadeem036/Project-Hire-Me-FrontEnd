import SideBar from "../components/sidenav/sidenav";
import UserNav from "../components/userNav/usernav";
import Userstatus from "../components/Stauts/Status";
import Footer from "../components/footer/footer";
import style from '../styles/emp.module.css'

export default function Customer() {
  return (
    
    <div className={style.container}>
    <div>
                <UserNav />
            </div>
            <div className={style.show}>

                <div>
                    <SideBar href="/customer-settings-page" complaintPage="/post-complaint"/>
                </div>

                <div>
                    <Userstatus />
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
     
    </div>
   
  )
}