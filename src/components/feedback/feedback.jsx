import SideBar from '../sidenav/sidenav';
import UserNav from "../userNav/usernav";
import Footer from '../footer/footer';
import style from '../feedback/feedback.module.css'
import EmpReviews from '../emp-reviews/emp-reviews';
export default function Userfeedback() {
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
 
                <div>
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