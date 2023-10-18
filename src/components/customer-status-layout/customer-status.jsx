import SideBar from "../customer-side-bar/customer-side-bar";
import Footer from "../footer/footer";
import style from "../customer-status-layout/customer-status.module.css";
import ServiceByStatusForCustomer from "../service-status-customer/service-status-customer";
import CustomerNav from "../customer-navbar/customer-navbar";
export default function CustomerServiceStatusLayout() {
  return (
    <>
      <div className={style.container}>
        <div>
          <CustomerNav />
        </div>
        <div className={style.show}>
          <div>
            <SideBar />
          </div>
          <div className={style.status}>
            <ServiceByStatusForCustomer />
          </div>
        </div>
        <div className={style.shows}>
          <Footer />
        </div>
      </div>
    </>
  );
}
