import CustomerSideBar from "../components/customer-side-bar/customer-side-bar";
import Footer from "../components/footer/footer";
import style from '../styles/emp.module.css'
import CustomerStatus from "../components/customer-status/customer";
import CustomerNav from "../components/customer-navbar/customer-navbar";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Customer() {
    const router = useRouter()
  const isAuthenticated = Cookies.get('customerToken')
  useEffect(()=>{

      if(isAuthenticated == null){
            router.push('/customer-login')
      }else{
        console.log('isValid')
      }
  },[])


  // else {
  // }
  console.log('emplogin',isAuthenticated)
 
  return (
    
    <div className={style.container}>
    <div >
                <CustomerNav />
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
   
