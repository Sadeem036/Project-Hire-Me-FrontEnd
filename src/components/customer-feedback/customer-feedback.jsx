import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../customer-feedback/customer-feedback.module.css'
import CustomerReviews from '../customer-review/customer-review';
export default function CustomerFeedbackLayout() {
    return (
        <>
        <div className={style.container} >
            <div>
                <UserNav />
            </div>
            <div className={style.show}>

                <div>
                    <SideBar />
                </div>
 
                <div className={style.review}>
                    <CustomerReviews/>
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
        </>

    )
}