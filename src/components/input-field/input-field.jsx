import React from 'react'
import { TextField } from '@mui/material'

const InputField = (props) => {
  return (
    <div>
    <TextField value={props.value} type={props.type} id="outlined-basic" label={props.name} variant="outlined" />  
    </div>
  )
}

export default InputField
