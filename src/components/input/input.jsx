import { TextField } from "@mui/material"
import style from "@/components/signup/signup.module.css"
export default function Input(props){
   
    return(
        <div className = {style.input}>
        
          <TextField id="outlined-basic" label={props.name}
           type="text" value={props.value}
           onChange={props.handle} 
           variant="outlined"/>
        
        </div>
    )
}