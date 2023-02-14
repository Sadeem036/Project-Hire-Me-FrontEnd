import CustomerSideBar from "../components/customer-side-bar/customer-side-bar";
import UserNav from "../components/userNav/usernav";
import Footer from "../components/footer/footer";
import style from '../styles/emp.module.css'
import CustomerStatus from "../components/customer-status/customer";

export default function Customer() {
 
  return (
    
    <div className={style.container}>
    <div>
                <UserNav />
            </div>
            <div className={style.show}>

                <div>
                    <CustomerSideBar href="/customer-settings-page" complaintPage="/post-complaint"/>
                </div>

                <div>
                    <CustomerStatus />
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
     
    </div>
  )}
   
// import CustomerSkills from "@/components/Customer/customer"
// export default function E() {
//   return (
//     <>
//     <div>
//     <CustomerSkills/>
//     </div>
//    </>
//   )
// }