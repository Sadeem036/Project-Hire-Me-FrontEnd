import { Button } from "@mui/material"
import style from "@/components/signup/signup.module.css"
export default function FormButton (props){
    return (
        <div className={style.btn}>
            <Button variant="contained"  color="secondary" type= {props.type}>  {props.name} </Button>
        </div>
    )
}