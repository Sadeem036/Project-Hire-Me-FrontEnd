import React from 'react'
import { TextField } from '@mui/material'

const InputField = (props) => {
  return (
    <div>
    <TextField onChange={props.onChange} value={props.value} name={props.name} type={props.type} id="outlined-basic" label={props.label} variant="outlined" />  
    </div>
  )
}

export default InputField
