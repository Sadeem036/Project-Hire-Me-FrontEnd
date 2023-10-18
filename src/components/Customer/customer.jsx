import SideBar from '../sidenav/sidenav';
import Footer from '../footer/footer';
import CustomerStatus from '../customer-status/customer';
import style from '@/components/Customer/customer.module.css'
import CustomerNav from '../customer-navbar/customer-navbar';
export default function CustomerSkills() {
    return (
        <>
        <div className={style.container} >
            <div>
                <CustomerNav />
            </div>
            <div className={style.show}>

                <div>
                    <SideBar />
                </div>
 
                <div>
                    <CustomerStatus/>
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
        </>

    )
}