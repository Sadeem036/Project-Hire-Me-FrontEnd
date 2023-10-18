import style from '../create-emp-customer-complaint/complaint.module.css'


const CreateComplaint = (props) => {
   
    return (
        
           
            <textarea value={props.value} onChange={props.onChange}className={style.textarea} > </textarea>
           
        
    )
}
export default CreateComplaint