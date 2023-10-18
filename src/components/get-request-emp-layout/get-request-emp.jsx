import SideBar from "../sidenav/sidenav";
import UserNav from "../userNav/usernav";
import Footer from "../footer/footer";
import GetRequestForEmployee from '../get-request-for-employee/get-request-for-employee'
import style from "../get-request-emp-layout/get-request-emp.module.css";

export default function GetRequestLayout() {
  return (
   
      <div className={style.container}>
        <div>
          <UserNav />
        </div> 
        <div className={style.show}>
           <div>
            <SideBar />
          </div> 
          <div className={style.status}>
             <GetRequestForEmployee/>
          </div>
        </div>
        <div className={style.shows}>
          <Footer />
        </div> 
       </div>

  );
}
