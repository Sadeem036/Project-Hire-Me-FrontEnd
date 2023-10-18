import style from "../custominput/custominput.module.css"

export default function CustomInput(props){
    return(
        <div >
            <input className={style.custominput} type={props.type} placeholder={props.placeholder} onChange={props.onChange}
            onClick={props.onClick}  value={props.value} name={props.name}/>
        </div>
    )    
    }