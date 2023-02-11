import style from '../create-emp-customer-complaint/complaint.module.css'
import CustomButton from '../custombutton/custombutton'

const CreateComplaint = () => {
    return (
        <div className={style.container}>
            <p className={style.paragraph}>Complaint Box</p>
            <textarea placeholder="Enter Your Complaint" className={style.textarea} > </textarea>
            <div className={style.btn}>
                <CustomButton className={style.btn} name="Submit Your Complaint"/>
            </div>
        </div>
    )
}
export default CreateComplaint