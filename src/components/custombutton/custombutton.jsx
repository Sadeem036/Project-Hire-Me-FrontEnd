import style from "../custombutton/custombutton.module.css"

export default function CustomButton(props){
    return(
        <div >
            <button className={style.btn} type={props.type}  onChange={props.onChange}
            onClick={props.onClick}  value={props.value} name={props.name}> {props.name}</button>
        </div>
    )    
    }