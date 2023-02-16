import SideBar from "../sidenav/sidenav";
import UserNav from "../userNav/usernav";
import Footer from "../footer/footer";
import style from "../emp-sevice-by-status/emp-service-status.module.css";
import ServiceByStatus from "../service-by-status/service-by-status";
export default function EmpServiceStatusLayout() {
  return (
    <>
      <div className={style.container}>
        <div>
          <UserNav />
        </div>
        <div className={style.show}>
          <div>
            <SideBar />
          </div>
          <div className={style.status}>
            <ServiceByStatus />
          </div>
        </div>
        <div className={style.shows}>
          <Footer />
        </div>
      </div>
    </>
  );
}
