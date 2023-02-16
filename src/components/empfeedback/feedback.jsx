import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../empfeedback/feedback.module.css'
import EmpReviews from '../emp-reviews/emp-reviews';
export default function EmpFeedbackLayout() {
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
 
                <div className={style.reviews}>
                    <EmpReviews/>
                </div>
            </div>
            <div className={style.shows}>
                <Footer />
            </div>
        </div>
        </>

    )
}