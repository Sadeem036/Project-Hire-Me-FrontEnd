import SideBar from "../customer-side-bar/customer-side-bar";
import Footer from "../footer/footer";
import style from "../customer-status-layout/customer-status.module.css";
import CompleteServiceOfCustomer from "../customer-complete-service/customer-complete-service";
import CustomerNav from "../customer-navbar/customer-navbar";

export default function CustomerCompletedLayout() {
  return (
    <>
      <div className={style.container}>
        <div>
          <CustomerNav/>
        </div>
        <div className={style.show}>
          <div>
            <SideBar />
          </div>
          <div className={style.status}>
            <CompleteServiceOfCustomer/>
          </div>
        </div>
        <div className={style.shows}>
          <Footer />
        </div>
      </div>
    </>
  );
}
